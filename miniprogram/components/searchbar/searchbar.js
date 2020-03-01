// components/searchbar/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isnavigator: {
      type: Boolean,
      value: false
    },
    ismain: {
      type: Boolean,
      value: false
    },
    tab_datas: {
      type: Array,
      value: [],
      observer: "onItemsChange"
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: '',
    searchValue: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemsChange: function onItemsChange() {
      this.setData({

      });
  },
    onClickSearch: function onClickSearch(e) {
      this.triggerEvent('onClickSubmit', {
        content: this.data.content
      });
    },
    bindConfirmSearch: function bindConfirmSearch(e) {
      this.triggerEvent('onClickSubmit', {
        content: e.detail.value
      });
    },
    bindSearchInput: function bindSearchInput(e) {
      this.setData({
        content: e.detail.value
      })
      this.triggerEvent('onSearchInputChange', {
        content: e.detail.value
      });
    },

  }
})