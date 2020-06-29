// pages/watch/watch.js
Page({
  id:'watch',
	data: {
		name:'',
    msg:{
      a:1
    },
    lastName:'',
    age:19,
    arr:[1,2,3]
	},
	watch: {
    lastName: function(val) {
      console.log(val)
      this.setData({
        name: '赵' + val
      })
    },
    arr:function(val){
      console.log(val)
    }
  },
  computed:{
    ageDesc:function(){
      return this.data.age>18?'成年':'未成年'
    }

  },
	onLoad: function (options) {
    this.setData({
      ['arr[0]']:999
    })
    this.data.arr.push(8)
    console.log(this.data.msg['a'])

	},
  input:function(e){
    console.log(e)
    this.setData({
      lastName:e.detail.value
    })
    this.data.lastName = e.detail.value
    console.log(this.data.lastName)
  }
})