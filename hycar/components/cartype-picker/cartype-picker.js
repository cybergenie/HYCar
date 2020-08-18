Component({
  properties: {
    value: {
      type: Array,
      value: [],
      observer: "onValue"
    },
    isShow: {
      type: Boolean,
      value: false,
      observer: "onShow"
    }
  },

  data: {
    carTypes: [{
      "type_code": "7001",     
      "type_name": "MPV"
    }, {
      "type_code": "7002",      
      "type_name": "中大型车"
    }, {
      "type_code": "7003",      
      "type_name": "SUV"
    }, {
      "type_code": "7004",      
      "type_name": "跑车"
    }, {
      "type_code": "7005",      
      "type_name": "紧凑轿车"
    }, {
      "type_code": "7006",      
      "type_name": "中型车"
    }, {
      "type_code": "7007",      
      "type_name": "微小型车"
    }],
    showPicker: false,
    tempCarTypePos: [0]    
  },

  attached: function () {
  
  },

  methods: {
    onTouchmask: function (event) {
    },
    onCancelClick(e) {
      this.triggerEvent('cancelclick', {});
    },
    onSureClick(e) {
      var valueCode = [0];
      var valueName = [''];

      if (this.data.carTypes != null && this.data.carTypes.length > this.data.tempCarTypePos) {        
          valueCode = [this.data.carTypes[this.data.tempCarTypePos].type_code];
          valueName = [this.data.carTypes[this.data.tempCarTypePos].type_name];        
      }

      this.triggerEvent('sureclick', {
        valueCode: valueCode,
        valueName: valueName
      });

    },
    type_onChange: function (e) {
      this.setData({
        tempCarTypePos: e.detail.value       
      });
    },   
    onValue() {      
      var tempCarTypePos = 0;
      for (var i = 0; i < this.data.carTypes.length; i++) {
        var item = this.data.carTypes[i];
        if (item.type_code == this.data.value[0]) {
          tempCarTypePos = i;
          break;
        }
      }
      this.setData({
        tempCarTypePos: [tempCarTypePos]
        
      });
    },
    onShow() {
      this.setData({
        showPicker: this.data.isShow
      });
    }
  }
});