// miniprogram/pages/sell/sell.js
const app = getApp()
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

  },

  onSaleCarTap:function(env){
    if(app.is_login()){
      console.log('跳转页面')
    }else{
      wx.navigateTo({
        url:"../login/login"
      })
    }
  }
})