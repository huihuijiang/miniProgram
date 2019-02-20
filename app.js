//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  },
	/**
	  * 设置监听器
	  */
	setWatcher(data, watch, that) { // 接收index.js传过来的data对象和watch对象和页面对象
		Object.keys(watch).forEach(key => { // 将watch对象内的key遍历
			console.log(key)
			this.observe(data, key, watch[key], that); // 监听data内的v属性，传入watch内对应函数以调用
		})
	},

    /**
     * 监听属性 并执行监听函数
     */
	observe(obj, key, watchFun, that) {
		var val = obj[key]; // 给该属性设默认值
		Object.defineProperty(obj, key, {
			configurable: true,
			enumerable: true,
			set: function (value) {
				val = value;
				console.log(val)
				watchFun(val, that); // 赋值(set)时，调用对应函数
			},
			get: function () {
				return val;
			}
		})
	}
})