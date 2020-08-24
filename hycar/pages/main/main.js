// miniprogram/pages/main/main.js
const db = wx.cloud.database();

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
    that.loadCarList();
    that.loadRecommandList();   
  },
//需要修改云开发数据库权限
  loadCarList:function(){
    var that = this;
    db.collection("carlist").limit(10).get().then(res => {     
      const carList = res.data;       
      that.setData({
        carList:JSON.parse(JSON.stringify(carList))
      });      
    })
  },

  loadRecommandList:function(){
    var that = this;
    db.collection("carlist").where({status:"7001"}).limit(10).get().then(res => {     
      const recommandCarList = res.data;       
      that.setData({
        recommandCarList:JSON.parse(JSON.stringify(recommandCarList))
      });
    })
  },
})