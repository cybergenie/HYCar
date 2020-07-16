// miniprogram/pages/detail/detail.js
import{network} from "../../utils/network.js"

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
    network.getCarDetailImages({
      type:type,
      id:id,
      success:function(detailCarImgs){
        that.setData({
          detailCarImgs: detailCarImgs
        })
      }
    });

    network.getCarDetailTitle({
      type:type,
      id:id,
      success:function(detailCarInfo){
        that.setData({
          detailCarInfo: detailCarInfo
        })        
      }
    });    
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