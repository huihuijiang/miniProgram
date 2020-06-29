
Page({
  id: 'preload',

  data: {

  },

  onLoad: function () {
    console.log("mine.onload")
  },
  
  onShow: function () { },
  onGetUser:function(e){
    console.log(e.detail.userInfo)
    // e.detail.userInfo.avatarUrl
    if(e.detail.userInfo.nickName){
      this.getToken(e.detail.userInfo.nickName, e.detail.userInfo.avatarUrl)
    }
    
  },
  getToken(nickName, avatarUrl) {
    return new Promise((resolve, reject) => {
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          if (res.code) {
            //发送res.code 到后台
            wx.request({
              url: 'http://localhost:3000/api/v1/user/login',
              header: {
                'content-type': 'application/json' // 默认值
              },
              data: {
                name: nickName,
                avatar: avatarUrl,
                code:res.code
              },
              method: 'POST',
              success(res) {
                console.log(res.data)
              }
            })
          }
        }
      })
    })
  }

 
})