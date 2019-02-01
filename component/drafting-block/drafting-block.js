// component/drafting/drafting.js
var pageX,pageY,x,y,x0,y0,c,pageY0;
Page({

  data: {

  },
    start:function(e){
        console.log(e);
        x0 = e.currentTarget.offsetLeft;
        y0 = e.currentTarget.offsetTop;
        pageX0 = e.touches[0].pageX;
    },
    move: function (e) {
        console.log(e)
    },
    end: function (e) {
        console.log(e)
    },
})