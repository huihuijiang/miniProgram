//index.js
//获取应用实例
const app = getApp()
console.log("index开始", new Date().getTime(), )
Component({
  
  computed: {
    type: function() {
      return this.data.navbarData.age > 18 ? '成年人' : '未成年'
    }
  },
  data: {
    full: '',
    msg: '',
    age: 16,
    name: '哈哈',
    // 头部组件所需的参数
    navbarData: {
      cat:{
        name:'喵喵'
      },
      age: 9,
      title: '积分中心', //导航栏 中间的标题
      titleShow: true, //是否显示中间标题
      titleColor: '#fff',
      backColor: 'linear-gradient(360deg,rgba(255,123,0,1) 0%,rgba(255,87,0,1) 100%);',
      backTap: function() {
        wx.showModal({
          title: '提示',
          content: '是否确定离开页面',
          success: function(res) {
            if (res.confirm) {
              wx.navigateBack({})
            }
          }
        })
      }
    },
  },
  

  methods:{
    onLoad: function (options) {
      console.log(options)
      var but = [{
        text: '哈哈',
        background: 'red',
        color: 'white',
        width: 80,
        handle: (event) => {
          that.onMyEvent(event)
        }
      },
      {
        text: '删除',
        background: 'gray',
        color: 'black',
        width: 50,
        handle: (event) => {
          that.onMyEvent(event)
        }

      }
      ]
      // console.log(new Date().getTime(), 'onlaunch')
      console.log(new Date().getTime(), "index.onload")
    },
    onReady: function () {
      console.log(new Date().getTime(), "index.onready")
    },
    onShow: function () {
      console.log(new Date().getTime(), this, "index.onshow")
      // wx.$preload(
      //   "preload",//要触发页面的pageName
      //   {id:1}//携带参数
      // )
      this.setData({
        msg: 23333
      }, function () { })
      this.setData({
        ['navbarData.cat.name']: '咪咪'
      })
      var obj={a:1}
      const handler = {
        get(target, key) {
          return target[key];
        },
        set(target, key, value) {
          target[key] = value;
          return true;
        }
      };
      obj= new Proxy(obj, handler);
      // obj = proxy
      console.log(obj.a)
      obj.a++;
      console.log(obj.a)
    },
    choose: function () {
      var _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          // tempFilePath可以作为img标签的src属性显示图片
          console.log(res)
          const tempFilePaths = res.tempFilePaths[0];
          _this.setData({
            src: tempFilePaths
          })
          wx.getImageInfo({
            src: tempFilePaths,
            success(res) {
              console.log(res)

            }
          })
          if (res.tempFiles[0].size > 200000) {
            wx.compressImage({
              src: tempFilePaths, // 图片路径
              quality: 60, // 压缩质量
              complete: function (res) {
                console.log(res)

                wx.getImageInfo({
                  src: res.tempFilePath,
                  success(res) {
                    console.log(res)

                  }
                })
              },
            })
          }

        }
      })
    },
    preview: function () {
      var arr = [];
      arr.push(this.data.src)
      wx.previewImage({
        current: arr[0], // 当前显示图片的http链接
        urls: arr // 需要预览的图片http链接列表
      })
    },
    click: function () {
      wx.login({
        success(res) {
          if (res.code) {
            console.log(res.code)
            wx.checkSession({
              success() {
                console.log("有效")
              },
              fail() {
                console.log("失效")
                // session_key 已经失效，需要重新执行登录流程
                wx.login() //重新登录
              }
            })
            wx.login({
              success(res) {
                if (res.code) {
                  console.log(res.code)
                }
              }
            })
          }
        }
      })
    },
    goto: function (e) {
      console.log(new Date().getTime(), "index.跳转")
      wx.$navigateTo({
        path: '../preload/preload',
        id: "preload" //跳转下一页面的pageName
      })
    },

  }
  
})