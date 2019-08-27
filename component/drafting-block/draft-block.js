// component/drafting-block/draft-block.js
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
width:String
    },

    
    data: {
        left:0,
        top:0,
    },
    ready:function(){
        const query = wx.createSelectorQuery().in(this)
        query.select('#box').boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function (res) {
          console.log(res)
            boxW = res[0].width;
            boxH = res[0].height;
        })
    },
   
    methods: {
        start: function (e) {
            x0      = e.currentTarget.offsetLeft;
            y0      = e.currentTarget.offsetTop;
            pageX0  = e.touches[0].pageX;
            pageY0  = e.touches[0].pageY;
            console.log(e,'start')
          this.setData({
            
            style: ''
          })          
        },
        move: function (e) {
            pageX   = e.changedTouches[0].pageX;
            pageY   = e.changedTouches[0].pageY;
            var _x  = pageX - pageX0;
            var _y  = pageY - pageY0;
            console.log(_y)
            var _left  = (x0 + _x) < 0 ? 0 : (x0 + _x) > (w - boxW) ? (w - boxW) : (x0 + _x);
            var _top   = (y0 + _y) < 0 ? 0 : (y0 + _y) > (h - boxH) ? (h - boxH) : (y0 + _y);
          console.log(y0 + _y)
            this.setData({
                left : _left,
                top  : _top,
              // style: 'transform: translate(' + _left + 'px, '+_top+'px);transition:all 0.3s linear 0.01s'
            })
            console.log('move')
            
        },
        end: function (e) {
          // 动画
          var _this = this;
          setTimeout(function(){
            console.log(_this.data.left)
            if (_this.data.left + 50 > w / 2) {
              // 靠右
              _this.setData({
                left: w - 100,
                style: 'transform: translate(' +0 + 'px, 0);transition:all 0.3s linear 0.01s;'
              })
            } else {
              // 靠左
              _this.setData({
                left: 0,
                style: 'transform: translate(' + 0 + 'px, 0);transition:all 0.3s linear 0.01s;'
              })
            }
          },100)
          
            
        },
    }
})
