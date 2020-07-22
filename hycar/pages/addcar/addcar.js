// hycar/pages/addcar/addcar.js
import {getUUID,getExt} from "../../utils/urls.js";
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempImages:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initImageSize();

  },

  onSubmitEvent:function(env)
  {
    const that = this;
    const content = env.detail.value.content;
    const car ={
      content:content
    }
    wx.showLoading({
      title:"正在上传...",
    })
     //上传图片到云服务器
     const fileIDList = [];
     if(that.data.tempImages.length > 0){
       that.data.tempImages.forEach((value,index)=>{
         const cloudPath = "carimglist/test/"+getUUID()+"."+getExt(value);         
         wx.cloud.uploadFile({
           filePath:value,
           cloudPath:cloudPath,
           success:res=>{
             fileIDList.push(res.fileID)
             if(fileIDList.length == that.data.tempImages.length){
              car.images = fileIDList;
              that.submitCar(car);        
             }
           }
         })
       })
     }
  },

  submitCar:function(car){
    wx.cloud.callFunction({
      name:"submitcar",
      data:car,
      success:res=>{
        const _id = res.result._id;
        if(_id){
          wx.hideLoading();
          wx.showToast({
            title:'上传成功',
          })
          }else{
            wx.showToast({
              title:res.result.errmsg,
            })
        }
      }
    })
    
  },


  initImageSize:function(){
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const containerWidth = windowWidth-60;
    const imageSize = (containerWidth-2.5*3)/3;
    this.setData({
      imageSize:imageSize
    }) 
  },

  onAddImageTap:function(env){
    const that = this;
    wx.chooseImage({
      success:function(res){
        const tempImages = res.tempFilePaths; 
        const oldImages = that.data.tempImages;
        const newImages = oldImages.concat(tempImages);
        that.setData({
          tempImages:newImages
        })

      },
    })
  },

  onRemoveBtnTap:function(env){
    const index = env.target.dataset.index;
    const tempImages = this.data.tempImages;
    tempImages.splice(index,1);
    this.setData({
      tempImages:tempImages
    })
  }
  
})