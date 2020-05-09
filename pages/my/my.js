// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    huizhangPhone: ''
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
  //去登陆
  toLogin () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  //去注册
  toRegister () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  toSeePhone() {
    wx.showActionSheet({
      itemList: ['会长电话：' + this.data.huizhangPhone],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex === 0) {
          wx.makePhoneCall({
            phoneNumber: '2222222222'
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 获取会长电话
  gethuizhangPhone () {
    let data = {
      txhname: ''
    }
    app.ajax.huizhangphoneFeach(data).then(res => {
      console.log(res)
      this.setData({
        huizhangPhone: res.data
      })
    }).catch(err => {
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