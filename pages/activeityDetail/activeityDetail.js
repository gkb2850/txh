// pages/activeityDetail/activeityDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    id: '',
    activeInfo: {},
    type: '1'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.id) {
      this.setData({
        id: options.id
      })
    }
    console.log(options.type)
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
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
    }
    this.getAcitveInfo()
  },
  // 删除活动
  delAcitve () {
    let data = {
      id: this.data.activeInfo.id
    }
    app.ajax.delhuodongFeach(data).then(res => {
      console.log(res)
      app.alert.error(res.msg)
      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        })
      }, 1000)
    }).catch(err => {
      console.log(err)
      app.alert.error(err.msg)
    })
  },
  //报名
  toBaoming (e) {
    let type = e.currentTarget.dataset.type
    if (type === 'ff') {
      app.alert.error('已经报名过了')
      return
    }
    let data = {
      memid: this.data.userInfo.id,
      memname: this.data.userInfo.name,
      activityid: this.data.activeInfo.id
    }
    app.ajax.jiahuodongFeach(data).then(res => {
      app.alert.error(res.msg)
    }).catch(err => {
      console.log(err.msg)
      app.alert.error(err.msg)
    })
  },
  //活动详情
  getAcitveInfo () {
    let data = {
      id: this.data.id
    }
    app.alert.loading()
    app.ajax.huodonginfoFeach(data).then(res => {
      app.alert.hideloading()
      this.setData({
        activeInfo: res.data
      })
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