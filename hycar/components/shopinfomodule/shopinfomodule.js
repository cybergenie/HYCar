// components/shopinfomodule/shopinfomodule.js
import { network } from "../../utils/network.js"
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLocationTap:function(env){
      network.getShopLocation();
    },
    
    onPhoneCallTap:function(env){
      network.getPhoneCall({
        name:"韩冰",
        phoneNumber:"131000000"
      })
    }
  }
})
