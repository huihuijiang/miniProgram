// pages/scale/scale.js
var p0 = [],
  p = [],
  scale = 1;
let status = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgW: 500,
    imgH: 500,
    left: 0,
    top: 0,
  },

  start: function(e) {
    console.log(e)
    p0 = e.touches
  },
  move: function(e) {
    p = e.touches;
    console.log(e)
    if (p.length === 2) {
      // 双指缩放
      var _x1 = p[0].pageX - p0[0].pageX;
      var _y1 = p[0].pageY - p0[0].pageY;
      var _x2 = p[1].pageX - p0[1].pageX;
      var _y2 = p[1].pageY - p0[1].pageY;
      var _x = Math.abs(_x1) - Math.abs(_x2) ? Math.abs(_x1) : Math.abs(_x2)
      var _y = Math.abs(_y1) - Math.abs(_y2) ? Math.abs(_y1) : Math.abs(_y2)
      console.log(_x, _y)
      this.setData({
        left: _x1 < 0 ? this.data.left - _x : this.data.left + _x,
        top: _x1 < 0 ? this.data.top - _y : this.data.top + _y,
        imgW: _x1 < 0 ? this.data.imgW + _x * 2 : this.data.imgW - _x * 2,
        imgH: _x1 < 0 ? this.data.imgH + _y * 2 : this.data.imgH - _y * 2
      })
      // var d1 = Math.sqrt(Math.pow(p0[0].pageX - p[0].pageX, 2) + Math.pow(p0[0].pageY - p[0].pageY, 2))
      // console.log(d1)
    } else if (p.length === 1) {
      // 单指移动
      var _x = p[0].pageX - p0[0].pageX;
      var _y = p[0].pageY - p0[0].pageY;
      this.setData({
        left: this.data.left + _x,
        top: this.data.top + _y,
      })

    }
    p0 = e.touches
  },
  end: function(e) {},
  onLoad: function(options) {
    let res = wx.getSystemInfoSync();
    this.setData({
      imgW: res.windowWidth,
      imgH: res.windowHeight
    })
    var a = {
      a: 1
    };
    var b = a;

    a.a = 2
    a = {
      a: 4
    }
    console.log(b); // 
    function ListNode(val) {
      this.val = val;
      this.next = null;
    }
    var l1 = new ListNode(5)
    // l1.next = new ListNode(4)
    // l1.next.next = new ListNode(3)
    var l2 = new ListNode(5)
    // l2.next = new ListNode(6)
    // l2.next.next = new ListNode(4)

    var addTwoNumbers = function(l1, l2) {
      var n1, n2, n = 0, node = new ListNode(''),head = node;
      while (l1 || l2) {
        var n1=l1 && l1.val?l1.val:0,
        n2 = l2 && l2.val ? l2.val : 0;
        l1 = l1 ? l1.next : null
        l2 = l2?l2.next : null
        node.next = new ListNode((n1 + n2 + n) % 10)
        n = parseInt((n1 + n2 + n) /10);
        node=node.next
      }
      if (n > 0) node.next = new ListNode(n)
      return head.next;
    };
    console.log(addTwoNumbers(l1, l2))
    var a = new Object(), b = 0, c = Number.NaN, d = 1, e = "Hello" 
    console.log(a || b && c || d && e);


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})