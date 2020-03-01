// miniprogram/pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onClickSearchSubmit: function onClickSearchSubmit(e) {
    this.getCarList(e.detail.content)
  },

  getCarList: function (keyword) {
    var that = this;
    if (!keyword) {
      keyword = ''
    }
    wx.request({
      url: 'https://wanxin.souche.com/api/search/car.json',
      data: {
        "keyword": keyword
      },
      success: function (res) {
        var carList =  res.data.data.carList;
        var pageNo = res.data.data.pageNo;
        var pageNum = res.data.data.pageNum;
        var pageSize = res.data.data.pageSize;
        var totalNum = res.data.data.totalNum;
        console.log(res)
        that.setData({
          carList:carList,
          pageNo:pageNo,
          pageNum:pageNum,
          pageSize:pageSize,
          totalNum:totalNum
        })
      }
    })
  },

  getCarRecommend: function () {
    var that = this;
    wx.request({
      url: 'https://wanxin.souche.com/api/search/car.json',
      data: {
        "userTag":"EU8i32noLp"
      },
      success: function (res) {
        var carList =  res.data.data.carList;
        var pageNo = res.data.data.pageNo;
        var pageNum = res.data.data.pageNum;
        var pageSize = res.data.data.pageSize;
        var totalNum = res.data.data.totalNum;
        console.log(res)
        that.setData({
          carList:carList,
          pageNo:pageNo,
          pageNum:pageNum,
          pageSize:pageSize,
          totalNum:totalNum
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCarList()
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