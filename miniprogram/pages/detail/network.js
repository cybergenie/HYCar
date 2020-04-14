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
            var detailCarInfo= res.data.data; 
            if(params && params.success){
                params.success(detailCarInfo);
            }
          }
        });
      }
       
}

export {network}