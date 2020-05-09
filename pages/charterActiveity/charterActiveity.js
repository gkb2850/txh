// pages/charterActiveity/charterActiveity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeityList: [
      {
        title: '揭阳同乡会篮球队招募新生',
        src: '../../assets/images/timg.jpg',
        infoTxt: '这次招募的主要是大一新生，让新生快速融入新的集体,营造良好的校园环境',
        people: '李哒哒',
        time: '2020-4-24'
      },
      {
        title: '揭阳同乡会植树节春游活动',
        src: '../../assets/images/zhishu.jpg',
        infoTxt: '春天是一年中最美的季节,是学生踏青春游的好季节。通过踏青春游活动,让学生亲密接触大自然',
        people: '刘哒哒',
        time: '2020-5-20'
      }
    ],
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
  toReleaseActiveity () {
    wx.navigateTo({
      url: '/pages/releaseActiveity/releaseActiveity',
    })
  },
  // 活动列表
  getActiveList () {
    let data = {
      name: ''
    }
    app.ajax.huodonglistFeach(data).then(res => {
      app.alert.error(res.msg)
    }).catch(err => {
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