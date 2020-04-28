// pages/releaseCartxt/releaseCartxt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketData:{
      firstDay: '填写预约日期',
      lastDay: '填写结束日期',
      startDay: '填写发车日期',
      startTime: '填写发车时间'
    },
    timeDataArray: [[],[]]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  bindDateChange (e) {
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    console.log(e)
    if (type === 'firstDay') {
      this.setData({
        'ticketData.firstDay': value
      })
    } else if (type === 'lastDay') {
      this.setData({
        'ticketData.lastDay': value
      })
    } else if (type === 'startDay') {
      this.setData({
        'ticketData.startDay': value
      })
    } else if (type === 'startTime') {
      this.setData({
        'ticketData.startTime': value
      })
    }
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})