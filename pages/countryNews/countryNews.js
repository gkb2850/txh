// pages/news/news.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search: '',
    activeityList: [],
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
    app.tologin()
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userData: userInfo
      })
    }
    this.gettxhActive()
  },
  // 获取同乡会活动
  gettxhActive () {
    let data = {
      name: this.data.userData.txhname,
      search: this.data.search
    }
    app.alert.loading()
    app.ajax.huodongFeach(data).then(res => {
      console.log(res)
      app.alert.hideloading()
      this.setData({
        activeityList: res.data
      })
    }).catch(err => {
      app.alert.hideloading()
      app.alert.error(err.msg)
    })
  },
  inputsearch (e) {
    let value = e.detail.value
    this.setData({
      search: value
    })
    this.gettxhActive()
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