// hycar/pages/addcar/addcar.js
import {getUUID,getExt} from "../../utils/urls.js";
const app = getApp();
const db = wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'长春市',
    tempDescription:'',
    tempImages:[],
    date:'',
    datePickerValue: ['', '', ''],
    datePickerIsShow: false

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
    const firstLicensePlateDate = this.data.firstLicensePlateDate;
    const mileage = env.detail.value.mileage;
    const type = this.data.carType;
    
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
    
    const carDescription = ""; 
    if(that.data.tempDescription.length>0){
      car.carDescription = that.data.tempDescription;
    }
    else{
      car.carDescription = "";
    }

     //上传图片到云服务器
     const fileIDList = [];
     if(that.data.tempImages.length > 0){
       that.data.tempImages.forEach((value,index)=>{
         console.log(value,index);
         const cloudPath = "carimglist/test/"+getUUID()+"."+getExt(value);         
         wx.cloud.uploadFile({
           filePath:value,
           cloudPath:cloudPath,
           success:res=>{
             fileIDList.unshift(res.fileID)
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

  showDatePicker: function (e) {
    // this.data.datePicker.show(this);
    this.setData({
      datePickerIsShow: true,
    });
  },

  datePickerOnSureClick: function (e) {
    console.log('datePickerOnSureClick');
    console.log(e);
    const tempDate = new Date();
    tempDate.setFullYear(e.detail.value[0]);
    tempDate.setMonth(e.detail.value[1]);
    tempDate.setDate(e.detail.value[2]);    
    this.setData({
      date: `${e.detail.value[0]}年${e.detail.value[1]}月${e.detail.value[2]}日`,
      datePickerValue: e.detail.value,
      datePickerIsShow: false,
      firstLicensePlateDate:tempDate
    });
  },

  datePickerOnCancelClick: function (event) {
    console.log('datePickerOnCancelClick');
    console.log(event);
    this.setData({
      datePickerIsShow: false,
    });
  },

  onCarPictureTap(){    
    wx.navigateTo({
      url:"../addPictures/addPictures", 
    }) 
  },

  onDescriptionTap(){
    wx.navigateTo({
      url:"../addDescription/addDescription", 
    }) 
  }
  
})