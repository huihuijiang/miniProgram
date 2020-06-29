// component/input/input.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
value:"222"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input:function(e){
console.log(e.detail.value)
this.setData({
  value: e.detail.value
})
    }
  }
})
