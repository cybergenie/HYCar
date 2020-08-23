// miniprogram/pages/detail/detail.js
import{network} from "../../utils/network.js"
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    segmentItems: ['车辆信息', '详细配置', '车辆实拍']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var type=options.type;
    var id=options.id;

    db.collection("carlist").where({_id:id}).get().then(res => {     
      const carList = res.data; 
      const saveMoney=(carList[0].newPriceTax-carList[0].price).toFixed(2);
      that.setData({
        detailCar:JSON.parse(JSON.stringify(carList[0])),
        saveMoney:saveMoney
      });       
    })      
  },

  onPhoneCallTap:function()
  {
    network.getPhoneCall({
      name:"韩冰",
      phoneNumber:"131000000"
    })
  },
  onIntoShopTap:function(){
    wx.switchTab({
      url:'/pages/main/main'
    })
  },
  onLocationTap:function(env){
    network.getShopLocation();
  },
  
  onPhoneCallTap:function(env){
    network.getPhoneCall({
      name:"韩冰",
      phoneNumber:"131000000"
    })
  }

  
})