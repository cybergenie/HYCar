// miniprogram/pages/buy/buy.js
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    

  },

  carListEvent:function(e){
    var searchCarList = e.detail.carList
    this.setData({
      searchCarList:JSON.parse(JSON.stringify(searchCarList)),
    })   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;   
    db.collection("carlist").where({status:"7001"}).limit(10).get().then(res => {     
      const carList = res.data;       
      that.setData({
        searchCarList:JSON.parse(JSON.stringify(carList))
      });      
    })
  }
  
})