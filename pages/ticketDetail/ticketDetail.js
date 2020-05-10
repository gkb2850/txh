// pages/ticketDetail/ticketDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allPeopleNum: 0,
    signInNum: 0,
    selectImging: '../../assets/images/dagouyouquana.png',
    selectImg: '../../assets/images/dagouyouquanb.png',
    id: ''
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
    this.getCarInfo()
  },
  signInPeople (e) {
    let index = e.currentTarget.dataset.index
    let data = this.data.carInfoData.ticketuserlinks[index]
    data.qiandao = data.qiandao === '已签到' ? '未签到' :'已签到'
    let dataStr = 'carInfoData.ticketuserlinks['+ index +']'
    this.setData({
      [dataStr]: data
    })
    let num = 0
    this.data.carInfoData.ticketuserlinks.forEach(i => {
      if (i.qiandao === '已签到') {
        num++
      }
    })
    this.setData({
      signInNum: num
    })
    this.qiandaoNum()
  },
  // 签到所有
  signInPeopleAll () {
    let data = this.data.carInfoData.ticketuserlinks
    data.forEach(i => {
      i.qiandao = '已签到'
    })
    this.setData({
      'carInfoData.ticketuserlinks': data,
      signInNum: this.data.carInfoData.ticketuserlinks.length
    })
    this.qiandaoNum('all')
  },
  //获取汽车票详情
  getCarInfo () {
    let data = {
      id:this.data.id
    }
    app.alert.loading()
    app.ajax.chepiaoInfofoFeach(data).then(res => {
      console.log(res)
      app.alert.hideloading()
      let data = res.data.ticketuserlinks
      let num = 0
      data.forEach(i => {
        if (i.qiandao === '已签到') {
          num++
        }
      })
      this.setData({
        carInfoData: res.data,
        allPeopleNum: data.length ? data.length: 0,
        signInNum:num
      })
    }).catch(err => {
      console.log(err)
      app.alert.hideloading()
      app.alert.error(err.msg)
    })
  },
  //签到
  qiandaoNum (str) {
    let data = {}
    if (str === 'all') {
      data.id = this.data.id
    } else {
      let arr = []
      let arrs = []
      this.data.carInfoData.ticketuserlinks.forEach(i => {
        if (i.qiandao === '已签到') {
          arr.push(i.id)
        } else {
          arrs.push(i.id)
        }
      })
      data.id = this.data.id
      data.userId = arr.join(',')
      data.cancelId = arrs.join(',')
    }
    app.ajax.qiandaocarfoFeach(data).then(res => {
      app.alert.error(res.msg)
    }).catch(err => {
      app.alert.error(err.msg)
      this.getCarInfo()
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