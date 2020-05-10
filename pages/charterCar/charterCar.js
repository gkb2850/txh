// pages/charterCar/charterCar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userData: {},
    carList: []
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
    this.setData({
      userData: userInfo
    })
    this.getCarList()
  },
  toReleaseCar () {
    wx.navigateTo({
      url: '/pages/releaseCartxt/releaseCartxt',
    })
  },
  // 车票列表
  getCarList () {
    let data = {
      txhname: this.data.userData.txhname
    }
    app.alert.loading()
    app.ajax.ticketlistFeach(data).then(res => {
      console.log(res)
      this.setData({
        carList: res.data
      })
      app.alert.hideloading()
    }).catch(err => {
      app.alert.hideloading()
      app.alert.error(err.msg)
      console.log(err)
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