// pages/setdata/setdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
      console.log("set  前:", new Date().getTime())
    
    this.setData({
      data:[{ "code": "00000225", "name": "轻住·新博睿酒店公寓（济南高新万达广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370102", "district": "历下区", "star": null, "label": ["商务出行", "浪漫情侣", "朋友聚会娱乐"], "location": { "lat": 36.68693, "lon": 117.129333 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000225/2/00000064/f553ef384eec05ebd875119823ec69ac720114.jpg"], "score": 5, "commentCount": 50, "commentLabel": ["卫生好", "房间宽敞", "性价比高"], "showPrice": 268, "distance": null, "serviceTag": ["wifi", "电梯", "电热水壶", "免费宽带", "拖鞋", "吹风机", "停车场"], "businessDistrict": { "businessDistrictId": 586, "hotelName": null, "businessDistrictName": "高新万达广场", "cityName": "济南市", "cityCode": "370100", "longitude": 117.128319, "latitude": 36.685902 }, "fullHouse": false }, { "code": "00000409", "name": "轻住·希悦酒店（北园荣盛时代广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370112", "district": "历城区", "star": null, "label": null, "location": { "lat": 36.703483, "lon": 117.06191 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000409/1/0a162187740b70552af15a6131630392139101.jpg"], "score": 5, "commentCount": 113, "commentLabel": ["位置繁华", "服务热情", "卫生好"], "showPrice": 590, "distance": null, "serviceTag": ["wifi", "行李寄存", "商务中心", "电梯", "接待外宾", "电热水壶", "国内长途电话", "免费宽带", "拖鞋", "吹风机", "停车场"], "businessDistrict": { "businessDistrictId": 425, "hotelName": null, "businessDistrictName": "全福立交桥", "cityName": "济南市", "cityCode": "370100", "longitude": 117.06533, "latitude": 36.68013 }, "fullHouse": false }, { "code": "00000408", "name": "轻住·春尚好精品酒店（火车站万达广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370103", "district": "市中区", "star": null, "label": ["24小时热水"], "location": { "lat": 36.662726, "lon": 116.996583 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000408/2/5cf19f236116ae467ba2dee8340a3cf410369466.jpg"], "score": 4.1, "commentCount": 28, "commentLabel": ["服务赞", "位置繁华", "房间大"], "showPrice": 128, "distance": null, "serviceTag": ["wifi", "行李寄存", "电梯", "电热水壶", "停车场"], "businessDistrict": { "businessDistrictId": 175, "hotelName": null, "businessDistrictName": "大观园", "cityName": "济南市", "cityCode": "370100", "longitude": 116.996819, "latitude": 36.661304 }, "fullHouse": false }, { "code": "00000413", "name": "轻住·云朵商务酒店（西客站店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370104", "district": "槐荫区", "star": null, "label": null, "location": { "lat": 36.656858, "lon": 116.916358 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000413/1/f5a75b814a9d8e1fb88ddc1c23577f184191913.jpg"], "score": 5, "commentCount": 35, "commentLabel": ["价格划算", "干净整洁", "房间很大"], "showPrice": 168, "distance": null, "serviceTag": ["wifi", "行李寄存", "电梯", "电热水壶", "拖鞋", "吹风机", "停车场"], "businessDistrict": { "businessDistrictId": 504, "hotelName": null, "businessDistrictName": "世购广场", "cityName": "济南市", "cityCode": "370100", "longitude": 116.92292, "latitude": 36.652771 }, "fullHouse": false }, { "code": "00017325", "name": "轻住·优尔盾度假酒店（火车站万达广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370105", "district": "天桥区", "star": null, "label": ["24小时热水", "浪漫情侣", "朋友聚会", "朋友聚会娱乐", "亲子酒店", "商务出行", "温馨家庭聚会"], "location": { "lat": 36.668864, "lon": 117.000255 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00017325/1/10bfe6c4a6a9883be8f4854bfe5676b2182496.jpg"], "score": null, "commentCount": 0, "commentLabel": ["干净卫生", "性价比高", "房间宽敞"], "showPrice": 250, "distance": null, "serviceTag": ["wifi", "行李寄存", "TV", "电梯", "电热水壶", "国内长途电话", "免费宽带", "拖鞋", "吹风机", "停车场"], "businessDistrict": null, "fullHouse": false }],
        
      
    }, function () {
      console.log("set:", new Date().getTime())
    })
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

  },
  change:function(){
    console.log("set  前:", new Date().getTime())
    this.setData({
      data: [{ "code": "00000225", "name": "轻住·", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370102", "district": "历下区", "star": null, "label": ["商务出行", "浪漫情侣", "朋友聚会娱乐"], "location": { "lat": 36.68693, "lon": 117.129333 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000225/2/00000064/f553ef384eec05ebd875119823ec69ac720114.jpg"], "score": 5, "commentCount": 50, "commentLabel": ["卫生好", "房间宽敞", "性价比高"], "showPrice": 268, "distance": null, "serviceTag": ["wifi", "电梯", "电热水壶", "免费宽带", "拖鞋", "吹风机", "停车场"], "businessDistrict": { "businessDistrictId": 586, "hotelName": null, "businessDistrictName": "高新万达广场", "cityName": "济南市", "cityCode": "370100", "longitude": 117.128319, "latitude": 36.685902 }, "fullHouse": false }, { "code": "00000409", "name": "轻住·希悦酒店（北园荣盛时代广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370112", "district": "历城区", "star": null, "label": null, "location": { "lat": 36.703483, "lon": 117.06191 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000409/1/0a162187740b70552af15a6131630392139101.jpg"], "score": 5, "commentCount": 113, "commentLabel": ["位置繁华", "服务热情", "卫生好"], "showPrice": 590, "distance": null, "serviceTag": ["wifi", "行李寄存", "商务中心", "电梯", "接待外宾", "电热水壶", "国内长途电话", "免费宽带", "拖鞋", "吹风机", "停车场"], "businessDistrict": { "businessDistrictId": 425, "hotelName": null, "businessDistrictName": "全福立交桥", "cityName": "济南市", "cityCode": "370100", "longitude": 117.06533, "latitude": 36.68013 }, "fullHouse": false }, { "code": "00000408", "name": "轻住·春尚好精品酒店（火车站万达广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370103", "district": "市中区", "star": null, "label": ["24小时热水"], "location": { "lat": 36.662726, "lon": 116.996583 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000408/2/5cf19f236116ae467ba2dee8340a3cf410369466.jpg"], "score": 4.1, "commentCount": 28, "commentLabel": ["服务赞", "位置繁华", "房间大"], "showPrice": 128, "distance": null, "serviceTag": ["wifi", "行李寄存", "电梯", "电热水壶", "停车场"], "businessDistrict": { "businessDistrictId": 175, "hotelName": null, "businessDistrictName": "大观园", "cityName": "济南市", "cityCode": "370100", "longitude": 116.996819, "latitude": 36.661304 }, "fullHouse": false }, { "code": "00000413", "name": "轻住·云朵商务酒店（西客站店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370104", "district": "槐荫区", "star": null, "label": null, "location": { "lat": 36.656858, "lon": 116.916358 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00000413/1/f5a75b814a9d8e1fb88ddc1c23577f184191913.jpg"], "score": 5, "commentCount": 35, "commentLabel": ["价格划算", "干净整洁", "房间很大"], "showPrice": 168, "distance": null, "serviceTag": ["wifi", "行李寄存", "电梯", "电热水壶", "拖鞋", "吹风机", "停车场"], "businessDistrict": { "businessDistrictId": 504, "hotelName": null, "businessDistrictName": "世购广场", "cityName": "济南市", "cityCode": "370100", "longitude": 116.92292, "latitude": 36.652771 }, "fullHouse": false }, { "code": "00017325", "name": "轻住·优尔盾度假酒店（火车站万达广场店）", "pmsCode": "beyondhost", "pmsHotelCode": null, "brand": "美团优选", "address": null, "provinceode": null, "province": null, "cityCode": null, "cityName": "济南市", "districtCode": "370105", "district": "天桥区", "star": null, "label": ["24小时热水", "浪漫情侣", "朋友聚会", "朋友聚会娱乐", "亲子酒店", "商务出行", "温馨家庭聚会"], "location": { "lat": 36.668864, "lon": 117.000255 }, "sales": null, "channel": null, "roomCountMap": {}, "hotelImgList": ["https://image.qinghotel.com/img/00017325/1/10bfe6c4a6a9883be8f4854bfe5676b2182496.jpg"], "score": null, "commentCount": 0, "commentLabel": ["干净卫生", "性价比高", "房间宽敞"], "showPrice": 250, "distance": null, "serviceTag": ["wifi", "行李寄存", "TV", "电梯", "电热水壶", "国内长途电话", "免费宽带", "拖鞋", "吹风机", "停车场"], "businessDistrict": null, "fullHouse": false }],
    },function(){
      console.log("set:",new Date().getTime())
    })
  }
})