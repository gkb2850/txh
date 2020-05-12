// pages/zixunDetail/zixunDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zixunData: {},
    id:''
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
    this.getzixunInfo()
  },
  //获取详情
  getzixunInfo () {
    let data = {
      id: this.data.id
    }
    app.alert.loading()
    app.ajax.zixunInfoFeach(data).then(res => {
      console.log(res)
      let data = res.data
      let date = new Date(data.creattime)
      data.creattime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      this.setData({
        zixunData: data
      })
      app.alert.hideloading()
    }).catch(err => {
      console.log(err)
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