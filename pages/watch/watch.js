// pages/watch/watch.js
Page({

	data: {
		
	},
	// 设置监听对象名和回调
	watch: {
		value: function (newValue, that) {
			console.log("---------------------------------" + newValue); // name改变时，调用该方法输出新值。
			that.next();
			
		},
		msg: function (newValue, that) {
			console.log("---------------------------------" + newValue); // name改变时，调用该方法输出新值。
			// that.next();

		},
	},
	
	onLoad: function (options) {
		if (getApp().globalData.value) {
			this.next();
		} else {
			getApp().setWatcher(getApp().globalData, this.watch, this); // 设置监听器
		}
	},
	next:function(){
		console.log(getApp().globalData.value)
	},
	
	setValue:function(){
		getApp().globalData.value = 100;
		getApp().globalData.msg = 'huihuijiang';

	},
	
	
})