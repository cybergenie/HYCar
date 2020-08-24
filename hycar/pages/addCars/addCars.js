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

  },

  onSubmitEvent:function(env)
  {
    const that = this;
    const seriesName = env.detail.value.seriesName;
    const simpleModelName = env.detail.value.simpleModelName;    
    const price = env.detail.value.price;
    const newPriceTax = env.detail.value.newPriceTax;
    const cityName = this.data.city;
    const color = env.detail.value.color;
    const engineSize = env.detail.value.engineSize;
    const firstLicensePlateDate = env.detail.value.firstLicensePlateDate;
    const mileage = env.detail.value.mileage;
    const type = this.data.carType;
    const carDescription = env.detail.value.carDescription;    
    const car ={
      seriesName:seriesName,
      simpleModelName:simpleModelName,      
      price:price,
      newPriceTax:newPriceTax,
      cityName:cityName,
      color:color,
      engineSize:engineSize,
      firstLicensePlateDate:firstLicensePlateDate,
      mileage:mileage,
      type:type,
      carDescription:carDescription,
      status:"status"
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
     else{
      car.images = [];
      that.submitCar(car);
     }
  },

  submitCar:function(car){
    console.log(car);
    wx.cloud.callFunction({
      name:"submitcar",
      data:car,
      success:res=>{
        const _id = res.result._id;
        if(_id){
          wx.hideLoading();
          wx.showToast({
            title:'上传成功',
          });
          setTimeout(function(){wx.navigateBack({})},800)
          
          }else{
            wx.showToast({
              title:res.result.errmsg,
            })
        }
      }
    })
    
  },

    /**
   * 城市选择确认
   */
  cityPickerOnSureClick: function (e) {
    console.log('cityPickerOnSureClick');    
    this.setData({
      city: e.detail.valueName[1],
      cityPickerValue: e.detail.valueCode,
      cityPickerIsShow: false,
    });

  },
  /**
   * 城市选择取消
   */
  cityPickerOnCancelClick: function (event) {
    console.log('cityPickerOnCancelClick');
    console.log(event);
    this.setData({
      cityPickerIsShow: false,
    });
  },


  showCityPicker() {
    // this.data.cityPicker.show()
    this.setData({
      cityPickerIsShow: true,
    });
  },

  /**
   * 汽车类型选择确认
   */
  carTypePickerOnSureClick: function (e) {
    this.setData({
      carType: e.detail.valueName[0],      
      carTypePickerIsShow: false,
    });

  },
  /**
   * 汽车类型选择取消
   */
  carTypePickerOnCancelClick: function (event) {    
    this.setData({
      carTypePickerIsShow: false,
    });
  },


  showCarTypePicker() {
    // this.data.cityPicker.show()
    this.setData({
      carTypePickerIsShow: true,
    });
  },

  onCarPictureTap(){    
    wx.navigateTo({
      url:"../addPictures/addPictures", 
    }) 
  }
  
})