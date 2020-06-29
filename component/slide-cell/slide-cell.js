//logs.js
console.log('组件初始化',new Date().getTime())
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },


  /**
   * 组件的属性列表
   */
  properties: {
    right: {
      type: Array,
      observer(newVal, oldVal, changedPath) {
        if (newVal.length){
          this.attached()
        }
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    x0: 0,
    y0: 0,
    left0: 0,

  },

  /**
   * 组件的方法列表
   */
  methods: {

    tap: function() {
      this.setData({
        style: 'transform: translate(' + 0 + 'px, 0);transition:all 0.3s linear 0.01s',
        left0: 0
      })
    },
    start(event) {

      var that = this;
      this.initLeft()
      this.setData({
        x0: event.touches[0].clientX,
        y0: event.touches[0].clientY,
      })

    },
    move(event) {
     
      wx.stopPullDownRefresh()
      let x1 = event.changedTouches[0].clientX,
        y1 = event.changedTouches[0].clientY,
        x0 = this.data.x0,
        y0 = this.data.y0,
        left = this.data.left0 + (x1 - x0),
        left0 = this.data.left0;
      if (Math.abs(x1 - x0) > Math.abs(y1 - y0)) { //zuoyou
        if (left0 == 0 && x1 - x0 > 0) left = 0; //直接右滑
        if (left >= 0 && x1 - x0 > 0) left = 0; //先左滑再右滑
        if (left <= -this.data.rightWid && x1 - x0 < 0) left = -this.data.rightWid; //左滑
        this.setData({
          style: 'transform: translate(' + left + 'px, 0);'
        })
      }else{
        
      }
    },
    end(event) {

      let left, style,
        x1 = event.changedTouches[0].clientX,
        y1 = event.changedTouches[0].clientY,
        x0 = this.data.x0,
        y0 = this.data.y0,
        left0 = this.data.left0;

      if (Math.abs(x1 - x0) > Math.abs(y1 - y0)) { //左右滑动

        if (x1 - x0 <= -50) { //左滑超过50
          left = -this.data.rightWid;
        } else if (x1 - x0 >= 50) { //右滑超过50
          left = 0;
        } else {
          left = left0;
        }
        left0 = left;
        this.setData({
          left0: left0,
          style: 'transform: translate(' + left + 'px, 0);transition:all 0.3s linear 0.01s'
        })
      }

    },
    clickTab: function(e) {
      var index = e.currentTarget.dataset.index;
      var that = this;
      that.tap()
      this.data.right[index].handle(this)
    },
    initLeft: function() {
      getApp().globalData.slideTask.forEach(value => {
        if (value != this) {
          value.setData({
            style: 'transform: translate(' + 0 + 'px, 0);transition:all 0.3s linear 0.01s',
            left0: 0
          })
        }

      })

    },
    attached() {
      console.log('attached',new Date().getTime())
      getApp().globalData.slideTask = getApp().globalData.slideTask || []
      getApp().globalData.slideTask.push(this)
      var rightWid = 0;
      this.properties.right.forEach(value => {
        rightWid += value.width
      })
      this.setData({
        rightWid: rightWid
      })
    },
  },
  

    
  
})