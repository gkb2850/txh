// component/carticket/carticket.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    status:{
      type: String,
      value: '0'
    },
    cardata: {
      type: Object,
      value: {}
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
    clickTicketLabel (e) {
      let id = e.currentTarget.dataset.id
      let ids = e.currentTarget.dataset.ids
      let obj = {id:id}
      let that = this
      wx.showModal({
        title: '车票改签',
        content: '确定要退票吗？',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            let data = {
              id: that.data.cardata.id,
              ticketId: ids
            }
            app.ajax.tuipiaoFeach(data).then(res => {
              app.alert.error(res.msg)
              that.triggerEvent("tuipiaole", obj)
            }).catch(err => {
              app.alert.error(err.msg)
            })
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
        url: '/pages/ticketDetail/ticketDetail?id='+ this.data.cardata.id,
      })
    }
  }
})
