/* 拖拽动画组件
* @refer 微信小程序
* @author huihuijiang 
*/
var
  x,
  y,
  x0,
  y0,
  boxW,
  boxH,
  pageX,
  pageY,
  pageX0,
  pageY0,
  w = wx.getSystemInfoSync().windowWidth,
  h = wx.getSystemInfoSync().windowHeight;
Component({
  properties: {
    left: String,
    top: String,
    bottom: String,
    right: String,
  },
  data: {
  },
  ready: function() {
    const query = wx.createSelectorQuery().in(this),_this=this;
    query.select('#box').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res) {
      boxW = res[0].width;
      boxH = res[0].height;
      var left = _this.data.left !== "" || _this.data.right !== "" ? w - boxW - parseInt(_this.data.right) : 0
      var top = _this.data.top !== "" || _this.data.bottom !== "" ? w - boxH - _this.data.bottom : 0
      _this.setData({
        left: left,
        top: top
      })
    })
  },
  methods: {
    start: function(e) {
      x0 = e.currentTarget.offsetLeft;
      y0 = e.currentTarget.offsetTop;
      pageX0 = e.touches[0].pageX;
      pageY0 = e.touches[0].pageY;
      this.setData({style: ''})
    },
    move: function(e) {
      pageX = e.changedTouches[0].pageX;
      pageY = e.changedTouches[0].pageY;
      var _x = pageX - pageX0;
      var _y = pageY - pageY0;
      var _left = (x0 + _x) < 0 ? 0 : (x0 + _x) > (w - boxW) ? (w - boxW) : (x0 + _x);
      var _top = (y0 + _y) < 0 ? 0 : (y0 + _y) > (h - boxH) ? (h - boxH) : (y0 + _y);
      this.setData({
        left: _left,
        top: _top,
      })
    },
    end: function(e) {
      // 动画
      var _this = this;
      setTimeout(function() {
        
        _this.setData({
          // 判断靠左还是靠右
          left: parseInt(_this.data.left) + (boxW / 2) > w / 2 ? w - boxW : 0,
          style: 'transform: translate(' + 0 + 'px, 0);transition:all 0.2s linear 0.01s;'
        })
      }, 50)
    },
  }
})