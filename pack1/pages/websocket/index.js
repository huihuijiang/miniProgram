// pack1/pages/websocket/index.js
const socket = require("../../../utils/socket.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   
    
    socket.connect((status, ws) => {
      let data = {
        myName:'会会酱'
      }//数据
      this.ws = ws
      console.log(status)
      if (status) {

        ws.emit('hi', JSON.stringify(data), res => {
          if (res.resultCode == 2000) {
            //登录成功
          }
        })
        ws.on('news', res => {
          console.log(res)
        })
      }
    })
    wx.request({
      url: 'http://localhost:3000/api/v1/article/create',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        title: '会会酱成功啦', //标题
        author: '会会酱',  //作者
        content: '啦啦啦',  //文章内容
        category: '随便' //文章分类
      },
      method:'POST',
      success(res) {
        console.log(res.data)
      }
    })
    wx.request({
      url: 'http://localhost:3000/api/v1/article/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      method: 'GET',
      success(res) {
        console.log(res.data)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})