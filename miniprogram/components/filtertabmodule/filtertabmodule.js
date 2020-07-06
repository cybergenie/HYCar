// components/filtertabmodule/filtertabmodule.js
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
    currentTab:-1,
    isShow: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabNav: function (e) {
  
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        var showMode = e.target.dataset.current == 0;
        this.setData({
          currentTab: e.target.dataset.current,
          isShow: showMode
        })        
      }
      if(this.data.currentTab === "0"){
        this.setData({
          displaycar: "block",
          displayprice:"none"
        })
      }
      if(this.data.currentTab === "2"){
        this.setData({
          displaycar: "none",
          displayprice:"block"
        })
      }
      
    }
  }
})
