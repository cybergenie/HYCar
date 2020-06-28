// components/carfiltermodule/carfiltermodule.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    branditems:{
      type:Array,
      value:[]
    }    
  },

  /**
   * 组件的初始数据
   */
  data: {
    segmentItems: ['品牌', '价格', '车型'],
    carModuleList: [
      {
        model: "MPV",
        modelName: "MPV",
        url: "https://img.souche.com/20160314/png/767cc856e101c2a446d963235b8fa82a.png"
      },
      {
        model: "PremiumMidsize",
        modelName: "中大型车",
        url: "https://img.souche.com/20160314/png/1877734ba87304cbf7994a9186a62f03.png"
      },
      {
        model: "SUV",
        modelName: "SUV",
        url: "https://img.souche.com/20160314/png/2beedc908716ef216cc60e93a2f029e2.png"
      },
      {
        model: "SportsCar",
        modelName: "跑车",
        url: "https://img.souche.com/20160314/png/b190df2606310991f9ac2a4b94b3449c.png"
      },
      {
        model: "compactCar",
        modelName: "紧凑型车",
        url: "https://img.souche.com/20160314/png/441d132d9c8b358f6512c7b97c2dc63d.png"
      },
      {
        model: "midSize",
        modelName: "中型车",
        url: "https://img.souche.com/20160314/png/e9da232c5dbcd99936b41c412aba3144.png"
      },
      {
        model: "tinyCar",
        modelName: "微小型车",
        url: "https://img.souche.com/20160314/png/8b29a108e3aeaa366304f2318f44a767.png"
      }
    ],
    carPriceList:[
      "5万以下",
      "5万-10万",
      "10万-15万",
      "15万-20万",
      "20万-30万",
      "30万以上",   
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    switchtab:function(){
      wx.switchTab({
        url:"/pages/buy/buy"
      })
    },
  }
})
