// pages/countryCar/countryCar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[],
    addressIndex: 0,
    carticketList: [],
    search: '',
    userData: {},
    txhid:'',
    piaoBtn: 0,
    payMaskShow: false,
    payInfoData: {},
    ticktId: ''
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
    let txhList = wx.getStorageSync('txhList')
    this.setData({
      userData: userInfo
    })
    txhList.forEach((i, oi) => {
      if (i.name === userInfo.txhname) {
        this.setData({
          txhid: i.id,
          addressIndex: oi
        })
      }
    })
    let date = new Date()
    this.setData({
      piaoBtn: date.getTime()
    })
    console.log(date.getTime())
    this.gettxhList()
    this.getTxhCarList()
  },
  clickAddressLeft (e) {
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    this.setData({
      addressIndex: index,
      txhid: id
    })
    this.getTxhCarList()
  },
  toReleaseCar () {
    wx.navigateTo({
      url: '/pages/releaseCartxt/releaseCartxt',
    })
  },
  //获取车票
  getTxhCarList () {
    let data = {
      search: this.data.search,
      txhid: this.data.txhid
    }
    app.alert.loading()
    app.ajax.bugtilistFeach(data).then(res => {
      console.log(res)
      let data = res.data.tickets
      data.forEach(i => {
        let num = i.starttime.indexOf(' ')
        i.times = i.starttime.slice(num)
        i.startDay = i.starttime.slice(0, num)
        i.makeTime = new Date(i.maketime).getTime()
        i.startTime = new Date(i.starttime).getTime()
      })
      this.setData({
        carticketList: data
      })
      console.log(data)
      app.alert.hideloading()
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
    this.getTxhCarList()
  },
  //获取同乡会
  gettxhList () {
    let data = {
      name: this.data.userData.name
    }
    app.ajax.gettxhListFeach(data).then(res => {
      console.log(res)
      this.setData({
        addressList: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  },
  goupiao(e) {
    console.log(e)
    let that = this
    this.setData({
      payMaskShow: true,
      ticktId: e.detail.id
    })
    this.data.carticketList.forEach(i => {
      if (i.id === e.detail.id) {
        this.setData({
          payInfoData: i
        })
      }
    })
    // wx.showModal({
    //   title: '车票购买',
    //   content: '确定要购票吗？',
    //   success(res) {
    //     if (res.confirm) {
    //       let data = {
    //         memid: that.data.userData.id,
    //         memname: that.data.userData.name,
    //         ticktid: e.detail.id,
    //         phone: that.data.userData.phone
    //       }
    //       app.ajax.goupiaoFeach(data).then(res => {
    //         app.alert.error(res.msg)
    //         that.getTxhCarList()
    //       }).catch(err => {
    //         console.log(err)
    //         app.alert.error(err.msg)
    //       })
    //   }
    // }
    // })
  },

  toHidePayMask () {
    this.setData({
      payMaskShow: false
    })
  },

  toPayMask () {
    let that = this
    let data = {
      memid: that.data.userData.id,
      memname: that.data.userData.name,
      ticktid: this.data.ticktId,
      phone: that.data.userData.phone
    }
    app.ajax.goupiaoFeach(data).then(res => {
      app.alert.error(res.msg)
      this.setData({
        payMaskShow: false
      })
      setTimeout(() => {
        that.getTxhCarList()
      },1000)
    }).catch(err => {
      console.log(err)
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