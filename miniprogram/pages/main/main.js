// miniprogram/pages/main/main.js
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
    ],
    segmentItems: ['品牌', '价格', '车型'],
    carModuleList: [
      {
        model: "MPV",
        modelName: "MPV",
        url: "https://img.souche.com/20160314/png/767cc856e101c2a446d963235b8fa82a.png"
      },
      {
        model: "PremiumMidsize",
        modelName: "中大型车",
        url: "https://img.souche.com/20160314/png/1877734ba87304cbf7994a9186a62f03.png"
      },
      {
        model: "SUV",
        modelName: "SUV",
        url: "https://img.souche.com/20160314/png/2beedc908716ef216cc60e93a2f029e2.png"
      },
      {
        model: "SportsCar",
        modelName: "跑车",
        url: "https://img.souche.com/20160314/png/b190df2606310991f9ac2a4b94b3449c.png"
      },
      {
        model: "compactCar",
        modelName: "紧凑型车",
        url: "https://img.souche.com/20160314/png/441d132d9c8b358f6512c7b97c2dc63d.png"
      },
      {
        model: "midSize",
        modelName: "中型车",
        url: "https://img.souche.com/20160314/png/e9da232c5dbcd99936b41c412aba3144.png"
      },
      {
        model: "tinyCar",
        modelName: "微小型车",
        url: "https://img.souche.com/20160314/png/8b29a108e3aeaa366304f2318f44a767.png"
      }
    ],
    carPriceList:[
      "5万以下",
      "5万-10万",
      "10万-15万",
      "15万-20万",
      "20万-30万",
      "30万以上",   
    ]
    
  },


  onClickSearchSubmit: function onClickSearchSubmit(e) {
    this.getCarListByModule(e.detail.content)
  },

  getBrandList: function () {
    var that = this;    
    wx.request({
      url: 'https://wanxin.souche.com/api/search/options/brands.json',      
      success: function (res) {
        var carBrands = res.data.data.brands;
        var carHotBrands = res.data.data.hotBrands;        
        that.setData({
          carBrands: carBrands,
          carHotBrands:carHotBrands
        })
      }
    })
  },

  getCarListByModule: function (keyword) {
    var that = this;
    if (!keyword) {
      keyword = ''
    }
    wx.request({
      url: 'https://wanxin.souche.com/json/car/getCarListByModule.json',
      data: {
        "moduleId": 165456
      },
      success: function (res) {
        var carList = res.data.data.items;              
        that.setData({
          carList: carList
        })
      }
    })
  },

  getCarRecommand: function () {
    var that = this;
    wx.request({
      url: 'https://wanxin.souche.com/api/car/homepage/recommend.json',
      data: {
        "userTag": "EU8i32noLp"
      },
      success: function (res) {
        var recommandCarList = res.data.data;        
        that.setData({
          recommandCarList: recommandCarList         
        })
      }
    })
  },

  onSegmentItemChanged: function (event) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCarListByModule()
    this.getBrandList()
    this.getCarRecommand()
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