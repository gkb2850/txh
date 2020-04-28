// component/carticket/carticket.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status:{
      type: String,
      value: '0'
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
    clickTicketLabel () {
      wx.showModal({
        title: '车票改签',
        content: '确定要退票吗？',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    clicktoSeek () {
      if (this.data.status !== '2') {
        return
      }
      wx.navigateTo({
        url: '/pages/ticketDetail/ticketDetail',
      })
    }
  }
})
