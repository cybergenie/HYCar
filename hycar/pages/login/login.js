// hycar/login/login.js
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
  onGetUserInfoTap:function(env){
    const userInfo = env.detail.userInfo;
    if(userInfo){
      app.setUserInfo(userInfo);
      wx.showToast({
        title:"授权成功"
      });
      setTimeout(()=>{
        wx.navigateBack({});
      },1000);
    }
  }

  
})