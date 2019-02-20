// component/range-slide/range-slide.js
var MIN = 0 , MAX = 0; 
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		min: {
			type: Number,
			value: 0,
			observer(newVal, oldVal, changedPath) {

			}
		},
		left1: { 
			type: Number,
			value: 0 ,
			observer(newVal, oldVal, changedPath) {
				
			}
		},
		left2: {
			type: Number,
			value: 30,
			observer(newVal, oldVal, changedPath) {

			}
		},
		blockSize: {
			type: Number,
			value: 15,
			observer(newVal, oldVal, changedPath) {

			}
		},
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		// left1: MIN,
		// left2: 30
	},
	lifetimes: {
		created(){

		},
		attached() {
			// 在组件实例进入页面节点树时执行
			console.log("attached")
		},
		ready(){
			var that = this;
			console.log("ready")
			const query = wx.createSelectorQuery().in(this);
			query.select('.box').boundingClientRect(function (res) {
				console.log(res)
				MAX = res.width - (that.data.blockSize / 2);
				MIN = 0 - (that.data.blockSize / 2);
				console.log(MIN)
			}).exec()
		},
		moved(){

		},
		detached() {
			// 在组件实例被从页面节点树移除时执行
		},
	},
	// 所在页面的周期
	pageLifetimes: {
		show() {
			// 页面被展示
			console.log("show")
		},
		hide() {
			// 页面被隐藏
		},
		resize(size) {
			// 页面尺寸变化
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		start: function (event) {
			this.setData({
				x0: event.touches[0].clientX,
				y0: event.touches[0].clientY,
			})
			console.log(this.data)
		},
		move: function (event) {
		
			let that = this;
			let [x1, y1, x0, y0] = [
				event.changedTouches[0].clientX,
				event.changedTouches[0].clientY,
				this.data.x0,
				this.data.y0
			];
			let left = that.data['left' + event.currentTarget.dataset.from] + (x1 - x0);
			left = left >= MIN ? left : MIN;
			left = left <= MAX ? left : MAX;
			if (event.currentTarget.dataset.from == 1) {
				left = left <= that.data.left2 ? left : that.data.left2;
			}
			if (event.currentTarget.dataset.from == 2) {
				left = left >= that.data.left1 ? left : that.data.left1;
			}
		
			this.setData({
				['left' + event.currentTarget.dataset.from]: left,
				x0: x0 + (x1 - x0)
			})

		},
		end: function (e) {

		},
	}
})
