import {globalUrls} from "../../utils/urls.js"

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
      }    
}

export {network}