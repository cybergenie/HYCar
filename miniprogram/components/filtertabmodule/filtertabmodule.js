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
          displayprice:"none",
          selected_0:true,
          selected_1:false,
          selected_2:false,
          selected_3:false,
          selected_4:false,
        })
      }
      if(this.data.currentTab === "2"){
        this.setData({
          displaycar: "none",
          displayprice:"block"
        })
      }
      
    },
    tabitem1Nav: function (e) {
      var current=e.target.dataset.current;
      console.log(e);
      if(current=="0"){
        this.setData({
          selected_0:true,
          selected_1:false,
          selected_2:false,
          selected_3:false,
          selected_4:false,
          displaycar: "none",
        })}
        if(current=="1"){
          this.setData({
            selected_0:false,
            selected_1:true,
            selected_2:false,
            selected_3:false,
            selected_4:false,
            displaycar: "none",
          })}
          if(current=="2"){
            this.setData({
              selected_0:false,
              selected_1:false,
              selected_2:true,
              selected_3:false,
              selected_4:false,
              displaycar: "none",
            })}
            if(current=="3"){
              this.setData({
                selected_0:false,
                selected_1:false,
                selected_2:false,
                selected_3:true,
                selected_4:false,
                displaycar: "none",
              })}
              if(current=="4"){
                this.setData({
                  selected_0:false,
                  selected_1:false,
                  selected_2:false,
                  selected_3:false,
                  selected_4:true,
                  displaycar: "none",
                })}
    }
  }
})
