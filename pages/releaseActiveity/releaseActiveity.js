// pages/releaseActiveity/releaseActiveity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acitveData: {
      firstDay: '填写开始时间',
      lastDay: '填写结束时间',
    },
    formats: {},
    nodes: []
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
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  onEditorReady(e) {
    let that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  bindDateChange(e) {
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
    }
  },
  toRelease () {
    let that = this
    this.editorCtx.getContents({
      success: res => {
        that.setData({
          nodes: res.html
        })
      }
    })
    let data = {
      id: '',
      title: this.data.acitveData.title,
      intro: this.data.acitveData.intro,
      menid: '',
      memname: '',
      starttime: this.data.acitveData.starttime,
      endtime: this.data.acitveData.endtime,
      phone: this.data.acitveData.phone,
      name: '',
      address: '',
      createby: ''
    }
    app.alert.fatxhFeach(data).then(res => {
      app.alert.error(res.msg)
    }).catch(err => {
      app.alert.error(err.msg)
    })

  },
  // 发布活动
  setActiveInfo () {
    
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