// miniprogram/pages/detail/detail.js
import{network} from "network.js"

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
    var that=this;
    network.getCarDetailImages({
      success:function(detailCarImgs){
        that.setData({
          detailCarImgs: detailCarImgs
        })
      }
    })

    network.getCarDetailTitle({
      success:function(detailCarTitle){
        that.setData({
          detailCarTitle: detailCarTitle
        })
      },
      success:function(detailCarDistance){
        that.setData({
          detailCarDistance: detailCarDistance
        })
      },
      // success:function(detailCarStandard){
      //   that.setData({
      //     detailCarStandard: detailCarStandard
      //   })
      // },
      // success:function(detailCarSaleTime){
      //   that.setData({
      //     detailCarSaleTime: detailCarSaleTime
      //   })
      // },
      // success:function(detailCarAddress){
      //   that.setData({
      //     detailCarAddress: detailCarAddress
      //   })
      // }
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