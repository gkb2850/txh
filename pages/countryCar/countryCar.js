// pages/countryCar/countryCar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList:[
      '广州市',
      '深圳市',
      '韶关市',
      '珠海市',
      '汕头市',
      '佛山市',
      '江门市',
      '湛江市',
      '茂名市',
      '肇庆市',
      '惠州市',
      '梅州市',
      '汕尾市',
      '河源市',
      '阳江市',
      '清远市',
      '潮州市',
      '揭阳市',
      '云浮市',
      '东莞市',
      '中山市',
    ],
    addressIndex: 0,
    carticketList: [
      {
        time: '08:50',
        titletxt: '天河客运站-本校',
        dayTime: '4-28',
        cartxt:'天河客运站上车直到本校门口，途径白云，东圃，清远约1个小时 清远(本校区)',
        money:'60',
        num:45
      },
      {
        time: '09:50',
        titletxt: '天河客运站-本校',
        dayTime: '4-28',
        cartxt: '天河客运站上车直到本校门口，途径白云，东圃，清远约1个小时 清远(本校区)',
        money: '60',
        num: 35
      },
      {
        time: '10:50',
        titletxt: '天河客运站-本校',
        dayTime: '4-28',
        cartxt: '天河客运站上车直到本校门口，途径白云，东圃，清远约1个小时 清远(本校区)',
        money: '60',
        num: 20
      },
      {
        time: '02:50',
        titletxt: '天河客运站-本校',
        dayTime: '4-28',
        cartxt: '天河客运站上车直到本校门口，途径白云，东圃，清远约1个小时 清远(本校区)',
        money: '60',
        num: 30
      },
      {
        time: '03:50',
        titletxt: '天河客运站-本校',
        dayTime: '4-28',
        cartxt: '天河客运站上车直到本校门口，途径白云，东圃，清远约1个小时 清远(本校区)',
        money: '60',
        num: 10
      },
      {
        time: '04:50',
        titletxt: '天河客运站-本校',
        dayTime: '4-28',
        cartxt: '天河客运站上车直到本校门口，途径白云，东圃，清远约1个小时 清远(本校区)',
        money: '60',
        num: 45
      }
    ],
    search: ''
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
  clickAddressLeft (e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      addressIndex: index
    })
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
      txhid: ''
    }
    app.ajax.bugtilistFeach(data).then(res => {
      console.log(res)
    }).catch(err => {
      app.alert.error(err.msg)
    })
  },
  inputsearch (e) {
    let value = e.detail.value
    this.setData({
      search: value
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