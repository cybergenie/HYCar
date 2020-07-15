// components/filtertabmodule/filtertabmodule.js
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
        network.getCarList({
          "sortName": 'smart',
          "newCar": 0,
          "sortType": '',
          "carBrand": '',
          "carSeries": '',
          "index": 1,
          success: function (carList) {
            that.setData({
              carList: carList
            }),
              that.triggerEvent('carListEvent', { carList: carList })
          }
        })
      }
      if (current == "1") {
        network.getCarList({
          "sortName": '',
          "newCar": 0,
          "sortType": '',
          "carBrand": '',
          "carSeries": '',
          "index": 1,
          success: function (carList) {
            that.setData({
              carList: carList
            }),
              that.triggerEvent('carListEvent', { carList: carList })
          }
        })
      }
      if (current == "2") {
        network.getCarList({
          "sortName": 'price',
          "newCar": 0,
          "sortType": 'asc',
          "carBrand": '',
          "carSeries": '',
          "index": 1,
          success: function (carList) {
            that.setData({
              carList: carList
            }),
              that.triggerEvent('carListEvent', { carList: carList })
          }
        })
      }
      if (current == "3") {
        network.getCarList({
          "sortName": 'price',
          "newCar": 0,
          "sortType": 'desc',
          "carBrand": '',
          "carSeries": '',
          "index": 1,
          success: function (carList) {
            that.setData({
              carList: carList
            }),
              that.triggerEvent('carListEvent', { carList: carList })
          }
        })
      }
      if (current == "4") {
        network.getCarList({
          "sortName": 'mile',
          "newCar": 0,
          "sortType": 'asc',
          "carBrand": '',
          "carSeries": '',
          "index": 1,
          success: function (carList) {
            that.setData({
              carList: carList
            }),
              that.triggerEvent('carListEvent', { carList: carList })
          }
        })
      }
      if (current == "5") {
        network.getCarList({
          "sortName": 'licensePlateDate',
          "newCar": 0,
          "sortType": 'desc',
          "carBrand": '',
          "carSeries": '',
          "index": 1,
          success: function (carList) {
            that.setData({
              carList: carList
            }),
              that.triggerEvent('carListEvent', { carList: carList })
          }
        })
      }

      this.setData({
        selectedCar: current,
        displaycar: "none",
      })
    }
  }
})
