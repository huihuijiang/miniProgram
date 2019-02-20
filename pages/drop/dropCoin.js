// pages/drop/dropCoin.js
const 	sw = wx.getSystemInfoSync().windowWidth,
		sh = wx.getSystemInfoSync().windowHeight;
var speedX = 5;
var speedY = 3;
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		animation:'',
		value:'恭喜发财',
		left:0,
		top:0,
		coins:[
			
		]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		
		// coins.forEach(function (value, index) {
		// 	value.show=false;
		// 	value.left = Math.floor(Math.random() * 5 + 1)*10

		// })
	},
	send:function(){
		var that = this;
		var coins = [];
		for (var i = 0; i < 1; i++) {
			coins.push({
				left: Math.floor(Math.random() * 34 + 1) * 10,
				top: 0,
				speedX: 5,
				speedY: 3,
				count: 0
			})
		}
		this.setData({
			coins: coins
		})
		this.data.coins.forEach(function(value,index){
console.log(value)
			console.log(Math.floor(Math.random() * 10 + 1))
			setTimeout(()=>{
				startMove(value, index, that)
			}, Math.floor(Math.random() * 5 + 1)*1000)
			
		})
		
		
	},
	input: function (e) {
console.log(e.detail.value)
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
var timer = null;
//定义点击事件函数
function startMove(value,index,that) {
	var WIDTH_COIN = 30;
	var HEIGHT_INPUT = 50;
	//内部清空计时器，防止上次返回值叠加
	value.show=true;
	clearInterval(value.timer);
	//设置计时器
	value.timer = setInterval(function () {
		//竖直方向上反向运动时速度为负值，为了达到反弹逐渐速度逐渐减小的效果，可以在向下碰撞后速度加上一个正值
		value.speedY += 20;
		//分别获取div距离左边距和上边距的动态距离
		var iW = value.left + value.speedX*2;
		var iH = value.top + value.speedY;
		//获取div水平方向运动的最大距离，即不包含边框的浏览器窗口的宽度clientWidth减去div的宽度
		var w = sw - WIDTH_COIN;
		//获取div垂直方向运动的最大距离
		var h = sh - WIDTH_COIN - HEIGHT_INPUT;
		console.log("h:"+h)
		//当动态宽度达到div最大运动宽度范围时，立刻转换速度为反方向负值，同时把w的值负值给iw，因为w是可视窗口范围，当w缩小时，iw保存的还是上一次窗口条件下的距离左边距的距离
		if (iW >= w || iW <= 0) { 
			value.speedX = -value.speedX;
			iW = w;
		}
		//当动态高度达到div最大运动高度范围时，立刻转向速度，同时将x方向速度乘以0.8，使之速度逐渐减小		
		if (iH >= h || iH <= 0) { 
			value.speedY = -value.speedY; 
			iH = h; 
			value.speedX *= 0.95;
		}
		//由于div.style.left和div.style.top还储存这上一次或第一次的计时后的值，此次计时后应把新的值储存起来，使div出现动态效果
		// if(value.speedY==0) value.show=false;
		
		if (iH >= h)value.count++;
		// value.count>2?false:true;
		console.log(value.count)
		
		
		var _coins = that.data.coins;
		
		if (value.count >= 2) { 
			console.log(value.top)
			value.show = false;
			console.log(value.timer)
			clearInterval(value.timer);
			console.log(value.timer)
		
		}
		value.left = iW;
		value.top = iH;
		_coins[index] = value
		that.setData({
			coins: _coins
		})
		// div.style.left = iW + "px";
		// div.style.top = iH + "px";
		// console.log(speedX);
	}, 80);
}