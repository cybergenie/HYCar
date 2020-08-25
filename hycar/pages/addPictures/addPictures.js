// hycar/pages/addPictures/addPictures.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempImages:[""]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {  
    this.initImageSize();
  },

  
  initImageSize:function(){
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const containerWidth = windowWidth-60;
    const imageSize = (containerWidth-2.5*3)/3;
    this.setData({
      imageSize:imageSize
    }) 
  },

  onImageTap:function(env)
  {
    const that = this;
    const index = env.target.dataset.index;
    wx.previewImage({
      urls:that.data.tempImages,
      current:that.data.tempImages[index]
    })
  },

  onAddTitleImageTap:function(env){
    const that = this;
    wx.chooseImage({
      success:function(res){        
        const tempImages = res.tempFilePaths; 
        const oldImages = that.data.tempImages;
        oldImages.shift();
        oldImages.unshift(tempImages[0]);
        const newImages = oldImages;
        that.setData({
          tempImages:newImages
        }); 
      },
    });    
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
        });             
      },
    });   
  },

  onRemoveTitleBtnTap:function(env){        
    const tempImages = this.data.tempImages;
    tempImages.shift();
    tempImages.unshift("");    
    this.setData({
      tempImages:tempImages
    });     
  },


  onRemoveBtnTap:function(env){    
    const index = env.target.dataset.index;
    const tempImages = this.data.tempImages;
    tempImages.splice(index,1);
    this.setData({
      tempImages:tempImages
    });     
  },

  onSubmitImage: function (env) {    
    const tempImages = this.data.tempImages;
    if(tempImages[0]=="")
    {
      tempImages.shift();
    }
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];
    prevPage.setData({
      tempImages: tempImages,
      carPictures: tempImages.length
    });  
    wx.navigateBack() 
  },

})