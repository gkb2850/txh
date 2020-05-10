// pages/releaseCartxt/releaseCartxt.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ticketData:{
      geton: '',
      getoff: '',
      firstDay: '填写预约日期',
      lastDay: '填写结束日期',
      startDay: '填写发车日期',
      startTime: '填写发车时间',
      banci: '',
      num: '',
      price: ''
    },
    userData: {},
    timeDataArray: [[],[]],
    txhid: ''
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
    let userInfo = wx.getStorageSync('userInfo')
    let txhList = wx.getStorageSync('txhList')
    if (userInfo) {
      this.setData({
        userData: userInfo
      })
    }
    txhList.forEach(i => {
      if (i.name === userInfo.txhname) {
        this.setData({
          txhid: i.id
        })
      }
    })
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
  // 发布车票
  fabuCarPiao () {
    if (this.data.ticketData.firstDay === '填写预约日期' || this.data.ticketData.lastDay === '填写结束日期' || this.data.ticketData.startDay === '填写发车日期' || this.data.ticketData.startTime === '填写发车时间' || this.data.ticketData.num === '' || this.data.ticketData.price === '' || this.data.ticketData.geton === '' || this.data.ticketData.getoff === '') {
      app.alert.error('请填写完整')
      return
    }
    console.log(this.data.ticketData)
    let data = {
      id: '',
      memid: this.data.userData.id,
      memname: this.data.userData.name,
      txhid: this.data.txhid,
      txhname: this.data.userData.txhname,
      onbus: this.data.ticketData.geton,
      offbus: this.data.ticketData.getoff,
      maketime: this.data.ticketData.firstDay,
      endtime: this.data.ticketData.lastDay,
      starttime: this.data.ticketData.startDay + ' '+ this.data.ticketData.startTime,
      banci: this.data.ticketData.banci,
      num: this.data.ticketData.num,
      price: this.data.ticketData.price,
      endnum: 0
    }
    app.ajax.fachepiaoFeach(data).then(res => {
      console.log(res)
      if (res.code === 200) {
        app.alert.error('发布成功')
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
      } else {
        app.alert.error('发布失败，请重试！')
      }
    }).catch(err => {
      app.alert.error('发布失败，请重试！')
    })
  },
  inputprice (e) {
    let value = e.detail.value
    this.setData({
      'ticketData.price': value
    })
  },
  inputnum(e) {
    let value = e.detail.value
    this.setData({
      'ticketData.num': value
    })
  },
  inputbanci(e) {
    let value = e.detail.value
    this.setData({
      'ticketData.banci': value
    })
  },
  inputgeton (e) {
    let value = e.detail.value
    this.setData({
      'ticketData.geton': value
    })
  },
  inputgetoff(e) {
    let value = e.detail.value
    this.setData({
      'ticketData.getoff': value
    })
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