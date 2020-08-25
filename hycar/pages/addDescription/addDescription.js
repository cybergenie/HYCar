// hycar/pages/addDescription/addDescription.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempDescription:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  inuTap:function(env){
    this.setData({
      tempDescription:env.detail.value      
    });    
  },

  onSubmitDescription:function (env){
    const tempDescription = this.data.tempDescription;
    
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];    
    prevPage.setData({
      tempDescription: tempDescription,
      descriptionCount: tempDescription.length
    });  
    wx.navigateBack() 
  }

})