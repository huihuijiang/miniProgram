// class Route {
  
//   init = function(name, page) {
//     this[name] = page;
//   }
//   getPage = function(name) {
//     if (!this[name]) {
//       console.warn("pageName错误")
//     }
//     return this[name]
//   }
//   getOptions(url) {
//     var url = url.split("?")[1];
//     var arr = url.split("&");
//     var options = {}
//     for (var i in arr) {
//       options[arr[i].split("=")[0]] = arr[i].split("=")[1]
//     }
//     return options
//   }
// }
// var router = new Route();
// router.pages=[];
// var that;
// var page = function(name, page) {
//   if (!name || typeof(name) != 'string') {
//     console.log("pageName错误")
//   }
//   console.log(page)
//   router.init(name, page);
//   if (page.onNavigator) {

//   }
//   page.takePreData = {};
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   page.onLoad = function(options) {
//     this.Load && this.Load(options)
//   }
//   page.onReady = function() {
//     this.Ready&&this.Ready()
//   }
//   page.onShow = function() {
//     this.Show&&this.Show()
//   }
//   page.onHide = function() {
//     this.Hide&&this.Hide()
//   }
//   page.onUnload = function() {
//     this.Unload&&this.Unload()
//   }
//   page.onPullDownRefresh = function() {
//     this.PullDownRefresh&&this.PullDownRefresh()
//   }
//   page.onReachBottom = function() {
//     this.ReachBottom&&this.ReachBottom()
//   }
//   page.onShareAppMessage = function() {
//     this.ShareAppMessage&&this.ShareAppMessage()
//   }
//   page.put = function(data, callback) {
//     that = this;
//     this.takePreData.promise = callback.then(res => {
//       if (that && that.setData) {
//         that.setData({
//           [data]: res
//         })
//         console.log("pre_setdata")
//       }
//       getApp().globalData[data] = res
//     });
//   }
//   page.take = function(data, callback) {
//     that = this;
//     console.log(getApp().globalData[data],new Date().getTime())
//     if (getApp().globalData[data]) {
//       console.log('开始', new Date().getTime())
//       this.setData({
//         [data]: getApp().globalData[data]
//       },function(){
//         console.log('setdata', new Date().getTime(), 'naviga渲染数据完成')
//       })
//       return true
//     } else {
//       return false
//     }
//   }
//   return page
// }
// wx.$preload = function(pageName, e) {
//   router.getPage(pageName).Preload && router.getPage(pageName).Preload(e)
// }
// wx.$navigateTo = function(res) {
//   router.getPage(res.pageName).Navigator && router.getPage(res.pageName).Navigator(router.getOptions(res.url))
//   var s = res.url.split("?")[0];

//   wx.navigateTo({
//     url: res.url,
//   })
// }
// wx.$redirectTo = function(res) {
//   router.getPage(res.pageName).Navigator && router.getPage(res.pageName).Navigator(router.getOptions(res.url))
//   wx.redirectTo({
//     url: res.url,
//   })
// }
// wx.$switchTab = function(res) {
//   router.getPage(res.pageName).Navigator && router.getPage(name).Navigator()
//   wx.switchTab({
//     url: res.url,
//   })
// }
// wx.$reLaunch = function(res) {
//   router.getPage(res.pageName).Navigator && router.getPage(res.pageName).Navigator(router.getOptions(res.url))
//   wx.reLaunch({
//     url: res.url,
//   })
// }

// module.exports = page