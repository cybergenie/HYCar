// components/filtertabmodule/filtertabmodule.js
import { network } from "../../utils/network.js"
const db = wx.cloud.database();
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
    displaycar: "none",
    currentTab: -1,
    selectedCar: "0",
    isShow: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabNav: function (e) {
      // if (this.data.currentTab === e.target.dataset.current) {
      //   // return false;
      // } else {
      var showMode = e.target.dataset.current == 0;
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
      // }
      if (this.data.currentTab === "0") {
        this.setData({
          displaycar: "block",
          displayprice: "none",
        })
      }
      if (this.data.currentTab === "2") {
        this.setData({
          displaycar: "none",
          displayprice: "block"
        })
      }

    },
    tabitem1Nav: function (e) {
      var that = this;
      var current = e.target.dataset.current;
      if (current == "0") {
          db.collection("carlist").where({status:"7001"}).limit(10).get().then(res => {     
            const carList = res.data;       
            that.setData({
              carList:carList
            });
            that.triggerEvent('carListEvent', { carList: carList })
          })        
      }
      if (current == "1") {
        db.collection("carlist").orderBy('createTime', 'desc').limit(10).get().then(res => {     
          const carList = res.data;       
          that.setData({
            carList:carList
          });
          that.triggerEvent('carListEvent', { carList: carList })
        }) 
      }
      if (current == "2") {
        db.collection("carlist").orderBy('price', 'asc').limit(10).get().then(res => {     
          const carList = res.data;       
          that.setData({
            carList:carList
          });
          that.triggerEvent('carListEvent', { carList: carList })
        }) 
      }
      if (current == "3") {
        db.collection("carlist").orderBy('price', 'desc').limit(10).get().then(res => {     
          const carList = res.data;       
          that.setData({
            carList:carList
          });
          that.triggerEvent('carListEvent', { carList: carList })
        }) 
      }
      if (current == "4") {
        db.collection("carlist").orderBy('mileage', 'asc').limit(10).get().then(res => {     
          const carList = res.data;       
          that.setData({
            carList:carList
          });
          that.triggerEvent('carListEvent', { carList: carList })
        }) 
      }
      if (current == "5") {
        db.collection("carlist").orderBy('firstLicensePlateDate', 'desc').limit(10).get().then(res => {     
          const carList = res.data;       
          that.setData({
            carList:carList
          });
          that.triggerEvent('carListEvent', { carList: carList })
        })
      }

      this.setData({
        selectedCar: current,
        displaycar: "none",
      })
    }
  }
})
