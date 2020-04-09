import {globalUrls} from "../../utils/urls.js"

const network = {
    getCarDetailImages: function (params) {       
        wx.request({
          url: globalUrls.DetailCarImageslider,
          data: {  
              carId:"67b3755a56f547d9aacdab14432937ea"
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
        wx.request({
          url: globalUrls.DetailCarTitle,
          data: {  
              carId:"67b3755a56f547d9aacdab14432937ea"
          },
          success: function (res) {
            var detailCarTitle = res.data.data.title; 
            var detailCarDistance = res.data.data.simpleInfo.distanceWan; 
            var detailCarStandard = res.data.data.simpleInfo.standard;
            var detailCarSaleTime = res.data.data.simpleInfo.saleTime;
            var detailCarAddress = res.data.data.simpleInfo.address;  
            console.log(params);
            if(params && params.success){
                params.success(detailCarTitle);
                params.success(detailCarDistance);
                params.success(detailCarStandard);
                
                params.success(detailCarSaleTime);
                params.success(detailCarAddress);
            }
          }
        });
      }
       
}

export {network}