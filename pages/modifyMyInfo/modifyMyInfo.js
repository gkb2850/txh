// pages/modifyMyInfo/modifyMyInfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'',
    password: '',
    passwordNew: '',
    passwordNews:'',
    userData: {
      name: '',
      phone: '',
      password: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type) {
      this.setData({
        type: options.type
      })
    }
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
  },
  //修改个人信息
  changeUserInfo () {
    let data = this.data.userData
    app.ajax.changeOneInfoFeach(data).then(res => {
      app.alert.error(res.msg)
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        })
      },1000)
    }).catch(err => {
      app.alert.error(err.msg)
    })
  },
  inputname (e) {
    let value = e.detail.value
    this.setData({
      'userData.name':value
    })
  },
  inputphone(e) {
    let value = e.detail.value
    this.setData({
      'userData.phone': value
    })
  },
  clickSure (e) {
    let type = e.currentTarget.dataset.type
    if (type === 'ff') {
      this.changeUserInfo()
    } else {
      if (this.data.password !== this.data.userData.password) {
        app.alert.error('原密码输入有误')
        this.setData({
          password: ''
        })
        return
      }

      if (this.data.passwordNew !== this.data.passwordNews) {
        app.alert.error('两次密码不一致')
        this.setData({
          passwordNew: '',
          passwordNews: ''
        })
        return
      }
      this.setData({
        'userData.password': this.data.passwordNew
      })
      this.changeUserInfo()
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