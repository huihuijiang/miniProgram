// pages/slideCell/slideCell.js
// pages/slideCell/slideCell.js

const app = getApp()
var qingPage = require("../../utils/PreloadFrame.js");
var navPromise, prePromise, _this;
let list = {
    hasNext: false,
    page: 1,
    currList: [],
    isSetData: true
  },
  sort = 0,
  getDate = '',
  city = '',
  pageSize = 10,
  that;
Page(new qingPage('preload', {
  id:'preload',

  data: {
    load: [],

    isShowMask: false,
    isShowOrderby: false,
    isShowScreen: false,
    isLoading: true,
    isGetMore: false,
    isOver: false,
    screenList: [{
      value: '行政区',
      selected: true,
      id: 1
    }, ],
    screen: '',
    list: [],
    arr: [{
      text: '距离从近到远',
      selected: true,
      value: 0
    }, {
      text: '综合排序',
      selected: false,
      value: 2
    }]
  },
  // 设置监听对象名和回调
  watch: {
    navdata: function(newValue, that) {
      console.log("---------------------------------" + newValue); // name改变时，调用该方法输出新值。


    },

  },
  Load: function() {
    this.setData({
      msg:'12345'
    })
    console.log(this, 'preload.load',new Date().getTime())
    that = this;
    this.take('navdata')// || this.getData();
    this.loadData()
    // getApp().setWatcher(this.data, this.watch, this); // 设置监听器
  },

  Preload: function(e) {

  },
  Navigator: function(options) {
    console.log('prload.onnavigator',new Date().getTime())
    // console.log(this.getData)
    this.put('navdata', this.getData())
  },
  Show: function() {
    console.log(new Date().getTime(), 'preload.show')
    // this.getData()
    _this = this;
  },
  getData: function() {
    var _this = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var data = [];
        for (var i = 0; i < 10; i++) {
          data.push({
            name: 'name' + i
          })
        }
        if (_this.setData) {
          _this.setData({
            navdata: data
          })
          console.log('setdata', new Date().getTime(), 'naviga渲染未完成load重新渲染数据完成')
        }
        console.log("reslove")
        resolve(data)

      }, 300)

    })
  },
  loadData:function(){
    setTimeout(() => {
      var data = [];
      for (var i = 0; i < 10; i++) {
        data.push({
          name: 'name' + i
        })
      }
      console.log(new Date().getTime(), 'load渲染开始')
        this.setData({
          navdata2: data
        },function(){
          console.log(new Date().getTime(),'load渲染数据完成')
        })
       

    }, 300)
  },
  initdata: function(type, resolve) {
    setTimeout(function() {
      var arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push({
          id: i,
          name: `第的回复光滑的复古风似懂非懂风格的风格${i}个`,
          age: (i + 11),
          con: '对方过后就肯定会让房间更大步伐环境改变对方就会感动可是对方看过 v 电话你发个电话客服 i 个地方书法课 i 说的废话可是对方黄金时吧端给他如此感人泰国tvhctyvchtrfd5挑 如同隔一天代分',
          a: '对方过后就肯定会让房间更大步伐环境改变对方就会感动可是对方看过 v 电话你发个电话客服 i 个地方书法课 i 说的废话可是对方黄金时吧端给他如此感人泰国tvhctyvchtrfd5挑 如同隔一天代分',
          b: '对方过后就肯定会让房间更大步伐环境改变对方就会感动可是对方看过 v 电话你发个电话客服 i 个地方书法课 i 说的废话可是对方黄金时吧端给他如此感人泰国tvhctyvchtrfd5挑 如同隔一天代分',
          c: '对方过后就肯定会让房间更大步伐环境改变对方就会感动可是对方看过 v 电话你发个电话客服 i 个地方书法课 i 说的废话可是对方黄金时吧端给他如此感人泰国tvhctyvchtrfd5挑 如同隔一天代分',
          d: '对方过后就肯定会让房间更大步伐环境改变对方就会感动可是对方看过 v 电话你发个电话客服 i 个地方书法课 i 说的废话可是对方黄金时吧端给他如此感人泰国tvhctyvchtrfd5挑 如同隔一天代分',

        })
      }
      //获得输入框中字符长度
      function getLength(val) {
        var str = new String(val);
        var bytesCount = 0;
        for (var i = 0, n = str.length; i < n; i++) {
          var c = str.charCodeAt(i);
          if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
          } else {
            bytesCount += 2;
          }
        }
        return bytesCount;
      }
      console.log(getLength(JSON.stringify(arr)))
      console.log(_this)
      if (_this.setData) {
        console.log('set', type, new Date().getTime())
        _this.setData({
          [type]: arr
        }, function() {
          console.log(new Date().getTime(), type + ".set成功")
        })
      } else {
        console.log(_this)
        _this.bb = "11"
        _this[type].arr = arr
        resolve && resolve()
      }


    }, 20)
  },
  onReady: function() {
    console.log(new Date().getTime(), "preload.onready")
    var _this = this;
    setTimeout(function() {
      _this.setData({
        load: _this.data.load
      })
    }, 1000)





  },

}))