// pages/slideCell/slideCell.js
// pages/slideCell/slideCell.js

const app = getApp()
const names=['小明','小红','小黄','小芳']
// var qingPage = require("../../utils/PreloadFrame.js");
var navPromise, prePromise, _this;
let list = {
    hasNext: false,
    page: 1,
    currList: [],
    isSetData: true
  },
  sort = 0,
  getDate = '',
  city = '',
  pageSize = 10,
  that;
Page({
  id: 'preload',

  data: {

  },

  onLoad: function() {
    this.take('navdata') || this.getData();
    this.loadData()
  },
  onPreload: function(e) {},
  onNavigator: function(options) {
    this.put('navdata', this.getData())
  },
  onShow: function() {},
  getData: function() {
    var _this = this;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var data = [];
        for (var i = 0; i < 10; i++) {
          data.push({
            name: names[Math.round(Math.random() * 3)],
            age:18+i
          })
        }
        if (_this.setData) {
          _this.setData({
            navdata: data
          })
          console.log('setdata', new Date().getTime(), 'naviga渲染未完成load重新渲染数据完成')
        }
        resolve(data)

      }, 300)

    })
  },
  loadData: function() {
    setTimeout(() => {
      var data = [];
      for (var i = 0; i < 10; i++) {
        data.push({
          name: names[Math.round(Math.random()*3)],
          age: 18 + i
        })
      }
      this.setData({
        navdata2: data
      }, function() {})
    }, 300)
  },
  
  onReady: function() {
    console.log(new Date().getTime(), "preload.onready")
    var _this = this;
    setTimeout(function() {
      _this.setData({
        load: _this.data.load
      })
    }, 1000)
  },
})