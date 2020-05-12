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
    type: '1',
    activitylinkList: [],
    selectImging: '../../assets/images/dagouyouquana.png',
    selectImg: '../../assets/images/dagouyouquanb.png',
    allPeopleNum: 0,
    signInNum: 0,
    activityid: ''
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
    if (options.activityid) {
      this.setData({
        activityid: options.activityid
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
      let data = {
        id: this.data.id
      }
      app.ajax.tuichuhuodongFeach(data).then(res => {
        app.alert.error(res.msg)
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        },1000)
      }).catch(err => {
        console.log(err.msg)
        app.alert.error(err.msg)
      })
    } else {
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
    }
  },
  //活动详情
  getAcitveInfo () {
    let data = {
      id: this.data.activityid
    }
    app.alert.loading()
    app.ajax.huodonginfoFeach(data).then(res => {
      app.alert.hideloading()
      this.setData({
        activeInfo: res.data.ticket,
        activitylinkList: res.data.activitylinks,
        allPeopleNum: res.data.activitylinks.length ? res.data.activitylinks.length : 0
      })
    }).catch(err => {
      app.alert.hideloading()
      app.alert.error(err.msg)
    })
  },
  signInPeople(e) {
    let index = e.currentTarget.dataset.index
    let data = this.data.activitylinkList[index]
    data.qiandao = data.qiandao === '已签到' ? '未签到' : '已签到'
    let dataStr = 'activitylinkList[' + index + ']'
    this.setData({
      [dataStr]: data
    })
    let num = 0
    this.data.activitylinkList.forEach(i => {
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
  signInPeopleAll() {
    let data = this.data.activitylinkList
    data.forEach(i => {
      i.qiandao = '已签到'
    })
    this.setData({
      activitylinkList: data,
      signInNum: this.data.activitylinkList.length
    })
    this.qiandaoNum('all')
  },
  //签到
  qiandaoNum(str) {
    let data = {}
    if (str === 'all') {
      data.id = this.data.id
    } else {
      let arr = []
      let arrs = []
      this.data.activitylinkList.forEach(i => {
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
    app.ajax.huodongqiandaoFeach(data).then(res => {
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