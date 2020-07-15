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
      }
    })
  }
  
})