// pages/charterActiveity/charterActiveity.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeityList: [],
    userData: {}
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
    this.getActiveList()
  },
  toReleaseActiveity () {
    wx.navigateTo({
      url: '/pages/releaseActiveity/releaseActiveity',
    })
  },
  // 活动列表
  getActiveList () {
    let data = {
      name: this.data.userData.txhname
    }
    app.alert.loading()
    app.ajax.huodonglistFeach(data).then(res => {
      this.setData({
        activeityList: res.data
      })
      app.alert.hideloading()
    }).catch(err => {
      app.alert.hideloading()
      app.alert.error(err.msg)
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