// pages/slideCell/slideCell.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        list: [
            { text: '微信好友1', left: 0, id: 10 },
            { text: '微信好友2', left: 0, id: 11 },
            { text: '微信好友3', left: 0, id: 12 }
        ],
		right:[
			{
				text: '哈哈',
				background: 'red',
				color: 'white',
				width: 80,
				handle:(event)=>{
					console.log(event)
				}
			},
			{
				text:'删除',
				background:'gray',
				color:'black',
				width:50,
				handle: (event) => {
					console.log(event)
				}
			}
		]
    },
	refresh:function(){
		console.log(this.selectComponent('slide-cell'))
	},
    onMyEvent: function (e) {//右侧滑块的点击事件

        var id = e.detail.id;
        var self = this;
        wx.showModal({
            title: '提示',
            content: '确定要删除吗',
            success: function (res) {
                if (res.confirm) {
                    e.detail.fun(id, self);//回调，必须加上
                    self.delete(id);//删除操作
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
    delete: function (id) {
        console.log(id);
		var list = this.data.list;
		

		list = list.filter((list) =>{
			return list.id != id;
		});
		this.setData({
			list:list
		})
		
		
    },

    onLoad: function () {
		console.log("onload")
    },
	onReady: function () {
		console.log("onready")
	},
	onShow: function () {
		console.log("onshow")
	},

})

