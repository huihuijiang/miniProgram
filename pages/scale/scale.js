// pages/scale/scale.js
var s=[],m=[],p0=[];
let status="";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgW:500,
        imgH:500,
        left:0,
        top:1,
    },

    start:function(e){
        var arr = [e.touches[0].pageX, e.touches[0].pageY];
        p0=[e.currentTarget.offsetLeft,e.currentTarget.offsetTop];
        s.push(arr);
        console.log(s)
        console.log(p0)
    },
    move:function(e){
        for (var i of e.changedTouches){
            m.push([e.changedTouches[0].pageX, e.changedTouches[0].pageY])
        }
        // console.log(m)
        if(m.length==1){
            var _x = m[0][0] - s[0][0];
            var _y = m[0][1] - s[0][1];
            var _left = (p0[0] + _x) ;
            var _top = (p0[1] + _y) ;
            console.log(_left)
            this.setData({
                left: _left,
                top: _top
            })
        }
        m=[];
    },
    end: function (e) {
        s = []; m = []; p0 = [];
    },
    onLoad: function (options) {
        let res = wx.getSystemInfoSync();
        this.setData({
            imgW: res.windowWidth,
            imgH: res.windowHeight
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