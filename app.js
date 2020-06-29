//app.js
require("/utils/myPage.js");
require("/utils/watch.js");
// 获取应用实例
console.log(Page)
App({

  onLaunch: function() {
    
    var _this = this;
    var menuButton = wx.getMenuButtonBoundingClientRect();
    console.log(menuButton)
    this.globalData.menuButton = menuButton
    wx.getSystemInfo({
      success: function(res) {
        _this.globalData.phonex = res.model.indexOf("iPhone X") == -1 ? false : true;
        // that.globalData.platform = res.platform;
        var menuButton = wx.getMenuButtonBoundingClientRect();
        console.log(menuButton)
        //导航栏高度
        _this.globalData.totalTopHeight =
          menuButton.height == menuButton.bottom ?
          menuButton.height :
          res.model.indexOf("iPhone") == 0 || (res.platform == 'android' && res.version == '7.0.3') ?
          menuButton.top + menuButton.height + (menuButton.top - res.statusBarHeight) :
          menuButton.top + menuButton.height + menuButton.top + res.statusBarHeight
        console.log('导航栏' + _this.globalData.totalTopHeight)
        //状态栏高度
        _this.globalData.statusBarHeight = res.statusBarHeight;
        console.log('状态栏' + res.statusBarHeight)
        //标题栏高度
        _this.globalData.titleBarHeight = _this.globalData.totalTopHeight - res.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null,
    value: '',
    msg: '',
  },

})