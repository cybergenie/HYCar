// miniprogram/pages/main/main.js
import{network} from "../../utils/network.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperImgUrls: [
      "https://img.souche.com/20161117/jpg/284e46c7da1ba9af64ae2c9fda63aae1.jpg",
      "https://img.souche.com/20161117/jpg/c5bf2c29ae7178fd57dcd4fc7a09a89c.jpg",
      "https://img.souche.com/20161117/jpg/06a0f2253ed58da11aebcb5275b753c9.jpg",
      "https://img.souche.com/20161117/jpg/1b560324d2541dca60b04c1552108f6a.jpg",
      "https://img.souche.com/20161117/jpg/a1ff51260f3d930f173f56123b8ff219.jpg",
      "https://img.souche.com/20161117/jpg/c972bdfac1227a22a1d0f7d4a5783c7b.jpg"
    ]  
  },


  onClickSearchSubmit: function onClickSearchSubmit(e) {
    this.getCarListByModule(e.detail.content)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    network.getCarListByModule({
      success:function(carList){
        that.setData({
          carList: carList
        })
      }
    })
    network.getBrandList({
      success:function(carBrands){
        that.setData({
          carBrands: carBrands
        })
      },
      success:function(carHotBrands){
        that.setData({
          carHotBrands: carHotBrands
        })
      }
    })
    network.getCarRecommand({
      success:function(recommandCarList){
        that.setData({
          recommandCarList: recommandCarList
        })
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