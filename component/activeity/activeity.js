// component/activeity/activeity.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Array,
      value: []
    },
    type: {
      type: String,
      value: '1'
    }
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
    toActiveityDetail (e) {
      let  id = e.currentTarget.dataset.id
      let activityid = e.currentTarget.dataset.activityid
      wx.navigateTo({
        url: '/pages/activeityDetail/activeityDetail?id=' + id + '&type=' + this.data.type + '&activityid=' + activityid,
      })
    }
  }
})
