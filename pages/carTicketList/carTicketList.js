// pages/carTicketList/carTicketList.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex: '0',
    userData: {},
    carTickData: []
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
    this.getMyCarList()
  },
  navClick (e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      navIndex: index
    })
    this.getMyCarList()
  },
  getMyCarList () {
    let data = {
      memid: this.data.userData.id,
      type: this.data.navIndex === '0' ? 0 : 1
    }
    app.alert.loading()
    app.ajax.myticketlistFeach(data).then(res => {
      console.log(res)
      let data = res.data
      data.forEach(i => {
        let date = new Date(i.starttime)
        i.starttime = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate())
      })
      this.setData({
        carTickData: data
      })
      app.alert.hideloading()
    }).catch(err => {
      app.alert.error(err.msg)
      app.alert.hideloading()

    })
  },
  tuipiaoles (e) {
    console.log(888)
    this.getMyCarList()
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