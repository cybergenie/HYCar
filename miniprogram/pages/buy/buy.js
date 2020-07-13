// miniprogram/pages/buy/buy.js
import{network} from "../../utils/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

  },

  carListEvent:function(e){
    var searchCarList = e.detail.carList
    this.setData({
      searchCarList:searchCarList,
    })
    console.log(searchCarList)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    network.getCarList({
      "sortName":'smart',
        "newCar":0,
        "sortType":'',
        "carBrand":'',
        "carSeries":'',
        "index":1,
      success:function(carList){
        that.setData({
          searchCarList: carList
        })  
        console.log(searchCarList)      
      }
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

  }
})