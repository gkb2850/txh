// pages/ticketDetail/ticketDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    peopleList: [
      {
        name:'古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      },
      {
        name: '古达达',
        select: false
      }
    ],
    allPeopleNum: 0,
    signInNum: 0,
    selectImging: '../../assets/images/dagouyouquana.png',
    selectImg: '../../assets/images/dagouyouquanb.png'
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
  signInPeople (e) {
    let index = e.currentTarget.dataset.index
    let data = this.data.peopleList[index]
    data.select = !data.select
    let dataStr = 'peopleList['+ index +']'
    this.setData({
      [dataStr]: data
    })
    let num = 0
    this.data.peopleList.forEach(i => {
      if (i.select) {
        num++
      }
    })
    this.setData({
      signInNum: num
    })
  },
  // 签到所有
  signInPeopleAll () {
    let data = this.data.peopleList
    data.forEach(i => {
      i.select = true
    })
    this.setData({
      peopleList: data,
      signInNum: this.data.peopleList.length
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