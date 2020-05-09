// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginData: {
      userName: '',
      passWord: ''
    }
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
  // 去注册
  toRegister () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  inputUserName (e) {
    console.log(e)
    let value = e.detail.value
    this.setData({
      'loginData.userName': value
    })
  },
  inputPassWord (e) {
    let value = e.detail.value
    this.setData({
      'loginData.passWord': value
    })
  },
  // 登录
  toLogin () {
    if (!this.data.loginData.userName && !this.data.loginData.passWord) {
      app.alert.error('请填写完整')
      return
    }
    let data = {
      loginname: this.data.loginData.userName,
      password: this.data.loginData.passWord
    }
    app.ajax.loginFeach(data).then(res => {
      console.log(res)
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