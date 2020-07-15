import {globalUrls} from "urls.js"

const network = {
    getCarListByModule: function (params) {       
        wx.request({
          url: globalUrls.ModuleCarList,
          data: {
            "moduleId": 165456
          },
          success: function (res) {
            var carList = res.data.data.items; 
            if(params && params.success){
                params.success(carList);
            }
          }
        });
      },
      getBrandList: function (params) {        
        wx.request({
          url: globalUrls.BrandList,      
          success: function (res) {
            var carBrands = res.data.data.brands;
            var carHotBrands = res.data.data.hotBrands;        
            if(params && params.success){
                params.success(carBrands);
                params.success(carHotBrands);
            }
          }
        })
      }, 
      getCarRecommand: function (params) {       
        wx.request({
          url: globalUrls.RecommendCarList,
          data: {
            "userTag": "EU8i32noLp"
          },
          success: function (res) {
            var recommandCarList = res.data.data;        
            if(params && params.success){
                params.success(recommandCarList);              
            }
          }
        })
      },
      getCarDetailImages: function (params) {        
        var id=params.id;
          wx.request({
            url: globalUrls.DetailCarImageslider,
            data: {  
                carId:id
            },
            success: function (res) {
              var detailCarImgs = res.data.data.carImgUrlsWithoutScheme; 
              if(params && params.success){
                  params.success(detailCarImgs);
              }
            }
          });
        },
  
        getCarDetailTitle: function (params) {   
          var id=params.id;
          wx.request({
            url: globalUrls.DetailCarTitle,
            data: {  
                carId:id
            },
            success: function (res) {
              var detailCarInfo= res.data.data; 
              if(params && params.success){
                  params.success(detailCarInfo);
              }
            }
          });
        }, 
        
        //搜索车型
        getCarList: function (params) {          
          var sortName=params.sortName;
          var newCar=params.newCar;
          var sortType=params.sortType;
          var carBrand=params.carBrand;
          var carSeries=params.carSeries;
          var index=params.index;
          
          wx.request({
            url: globalUrls.SearchCarList,
            data: {  
              "sortName":sortName,
              "newCar":newCar,
              "sortType":sortType,
              "carBrand":carBrand,
              "carSeries":carSeries,
              "index":index
            },
            success: function (res) {
              var carList = res.data.data.carList;
              if(params && params.success){
                  params.success(carList);
              }
            }
          });
        },
}

export {network}