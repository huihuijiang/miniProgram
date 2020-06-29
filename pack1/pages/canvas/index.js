// pack1/pages/canvas/index.js
Page({

  data: {

  },

  onLoad: function(options) {
    wx.request({
      url: 'http://localhost:3000/',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
    var longestPalindrome = function(s) {
      for(let i =1;i<s.length;i++){
        var l = Math.floor(s.length / 2 - 1),
          r = Math.ceil(s.length / 2),
          m = s[Math.ceil(s.length / 2 - 1)];
      }
      var child = [],m=''
      if (s.length % 2 !== 0) {
        var l = Math.floor(s.length / 2-1),
          r = Math.ceil(s.length / 2),
          m = s[Math.ceil(s.length / 2-1)];
      } else {
        var l = s.length / 2 - 2,
          r = s.length / 2;
      }
      console.log(l,r)
      while (l > 0) {
        if (s[l] == s[r]){
          child.push( s[l] + m + s[r])
          l--;
          r++;
        }else{
          break
        }
        
      }
      console.log(child)

    };
    console.log(longestPalindrome('babad'))
    this.getRect()
    this.getFields()
    this.getNode()
    this.getAllFields()
  },
  getRect() {
    wx.createSelectorQuery().select('#canvas-wrap').boundingClientRect(function(rect) {
      console.log(rect)
    }).exec()
  },
  getAllRects() {
    wx.createSelectorQuery().selectAll('.a-class').boundingClientRect(function(rects) {
      rects.forEach(function(rect) {
        console.log(rect)
      })
    }).exec()
  },
  getFields() {
    wx.createSelectorQuery().selectAll('').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY', 'src'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function(res) {
      console.log(res)
    }).exec()
  },
  getAllFields() {
    wx.createSelectorQuery().selectAll('.can').fields({
      dataset: true,
      size: true,
      scrollOffset: true,
      properties: ['scrollX', 'scrollY', 'src'],
      computedStyle: ['margin', 'backgroundColor'],
      context: true,
    }, function(res) {
      console.log(res)
    }).exec()
  },
  getNode() {
    wx.createSelectorQuery().select('#canvas-wrap').node(function(res) {
      console.log(res) // 节点对应的 Canvas 实例。
    }).exec()
  },

})