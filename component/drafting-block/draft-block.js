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
            console.log(e)
            
        },
        move: function (e) {
            pageX   = e.changedTouches[0].pageX;
            pageY   = e.changedTouches[0].pageY;
            var _x  = pageX - pageX0;
            var _y  = pageY - pageY0;
            var _left  = (x0 + _x) < 0 ? 0 : (x0 + _x) > (w - boxW) ? (w - boxW) : (x0 + _x);
            var _top   = (y0 + _y) < 0 ? 0 : (y0 + _y) > (h - boxH) ? (h - boxH) : (y0 + _y);
            this.setData({
                left : _left,
                top  : _top
            })
            
        },
        end: function (e) {
            
        },
    }
})
