// pages/signupactiveity/signupactiveity.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navIndex: '0',
    activeityList: [],
    formats: {},
    userData:{}
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
    if (userInfo) {
      this.setData({
        userData: userInfo
      })
    }
    this.myActiveList()
  },
  navClick(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      navIndex: index
    })
  },
  myActiveList () {
    let data = {
      memid: this.data.userData.id,
      type: this.data.navIndex === '0' ? 0 : 1
    }
    app.alert.loading()
    app.ajax.activitylistFeach(data).then(res => {
      console.log(res)
      let data = res.data
      this.setData({
        activeityList: data
      })
      app.alert.hideloading()
    }).catch(err => {
      console.log(err)
      app.alert.error(err.msg)
      app.alert.hideloading()
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