import {globalUrls} from "urls.js"

const network = {
  
        getShopLocation:function(){
          wx.openLocation({        
            longitude:125.364340,
            latitude:43.831931,
            scale: 16
          })
        },

        getPhoneCall:function(params){          
          wx.showActionSheet({
            itemList: ['呼叫', '添加联系人'],
            success: function(res) {              
              if (res.tapIndex == 0) {//直接呼叫
                wx.makePhoneCall({
                  phoneNumber: params.phoneNumber                  
                })
              } else if (res.tapIndex == 1) {//添加联系人
                wx.addPhoneContact({
                  firstName: params.name,
                  mobilePhoneNumber: params.phoneNumber                  
                })
              }
            }
          })
        }
}

export {network}