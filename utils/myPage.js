let routes = []
var MyInit = {
  // route:{},
  wxPage: Page,
  wxApp: App,
  routers: {},
  rewriteApp: function(e) {
    e.sendLogs = MyInit.log(e)
    return MyInit.wxApp(e)
  },
  rewritePage: function(e) {
    return MyInit.wxPage(MyInit.initState(e))
  },
  initState: function(e) {
    if (e.id) initPreload(e)

    var oldFunction = e.onLoad || {}
    e.onLoad = function(options) {
      console.log("beforeLoad")
      if (e.watch) initWatch(this, this.watch)
      oldFunction.call(this, options)
    }
    return e
  },
  getPage: function(name) {
    return MyInit.routers[name]
  },
  init: function(e) {

    e.watcher = function(obj, watch, that, cb, deep) {
      Object.keys(watch).forEach(key => { // 将watch对象内的key遍历
        if (typeof obj[key] === 'object' && (watch[key].deep || deep)) {
          cb && e.watcher(obj[key], obj[key], that, cb, true);
          !cb && e.watcher(obj[key], obj[key], that, watch[key].handle, true);
        } else {
          cb && e.observe(obj, key, cb, that);
          !cb && e.observe(obj, key, e.watch[key], that);
        }
      })
    }
    e.observe = function(obj, key, cb, _this) {
      var val = obj[key];
      Object.defineProperty(obj, key, {
        get: function() {
          console.log(key, '属性被读取,值为：' + val)
          return val;
        },
        set: function(value) {
          if (value === val) return
          val = value
          console.log(key, '属性被修改,值为：' + value)
          cb && cb.call(_this, value)
          // Object.keys(e.computed).forEach(key => { 
          //  _this.setData({
          //    [key]: e.computed[key].call(_this)
          //  })
          // })
        },
      })
    }


    return e
  },

}

function initPreload(p) {
  if (!MyInit.routers[p.id]) MyInit.routers[p.id] = p

  p.put = function(data, callback) {
    this.takePreData = {};
    this.takePreData.promise = callback.then(res => {
      if (this && this.setData) {
        this.setData({
          [data]: res
        })
      }
      getApp().globalData[data] = res
    });
  }
  p.take = function(data, callback) {
    if (getApp().globalData[data]) {
      this.setData({
        [data]: getApp().globalData[data]
      }, function() {})
      return true
    } else {
      return false
    }
  }

}

function initWatch(p, watch) {
  let cbMap = {}
  for (const key in watch) {
    // const cb = watch[key]
    cbMap[key] = watch[key]

  }
  console.log(cbMap)
  const handler = {
    get(target, key) {
      if (typeof target[key] === 'object' && target[key] !== null) {
        handler.key=key
        let newp = new Proxy(target[key], handler)
        return newp
      }
      return target[key];
    },
    set(target, key, value, receiver) {
      console.log('set:',target, key, value, receiver, cbMap[key])
      target[key] = value;
      if (cbMap[key]) cbMap[key].call(p, value)
      if (handler.key && cbMap[handler.key]) cbMap[handler.key].call(p, target)
      return true;
    }
  };
  p.data = new Proxy(p.data, handler);

}

function initComputed(that) {
  Object.keys(that.computed).forEach(key => {
    if (that.data.hasOwnProperty(key)) {
      console.wran('已存在，请重新命名')
    } else {
      console.log('初始化')
      if (typeof(that.computed[key]) === 'function') {
        that.setData({
          [key]: that.computed[key].call(that)
        })
      }
    }
  })
}
class Watcher {
  constructor(p, key, cb) {
    this.cb = cb

  }

}
wx.$navigateTo = function(res) {
  MyInit.getPage(res.id).onNavigator && MyInit.getPage(res.id).onNavigator(res)
  wx.navigateTo({
    url: path(res),
  })
}

function path(res) {
  var path = res.path + '?'
  for (var i in res.query) {
    path += i + '=' + res.query[i] + '&'
  }
  return path
}

Page = MyInit.rewritePage
// App = MyInit.rewriteApp