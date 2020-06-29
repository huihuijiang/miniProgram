// headTemplates/searchHead/searchHead.js
const app = getApp()
Component({
	properties: {
    
		navbarData: { //navbarData   由父页面传递的数据，变量名字自命名
			type: Object,
			value: {},
			observer: function (newVal, oldVal) {
				// console.log(newVal)
			}
		}
	},
	data: {
		height: '',
    defaultBack:true
		//默认值  默认显示左上角
	},
	attached: function () {
    console.log(this)
		// 定义导航栏的高度  方便对齐
		if (app.globalData.totalTopHeight) {
			this.setData({
				totalTopHeight: app.globalData.totalTopHeight,
        contentHeight: app.globalData.menuButton.height,
        contentTop: app.globalData.menuButton.top,
        ableBack:getCurrentPages().length>1
			})
		} 


		
	},
	methods: {
    goBack:function(){
      if (this.data.navbarData.backTap){
        this.data.navbarData.backTap()
      }else{
        wx.navigateBack()
      }
    },
	
		
	
	},


})