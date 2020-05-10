// pages/perInformation/perInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    register: {
      userImg: '',
      name: '哒哒哒',
      phone: '15905698535',
      sex: '男',
      hometown: '广东',
      gradetxt: '大四',
      collegestxt: '信息',
      classtxt: '软件',
      majortxt: '软件技术',
      password: '',
    },
    sexList:['男','女'],
    hometownList: [],
    gradetxtList: [],
    collegestxtList: [],
    classtxtList: [],
    majortxtList: [],
    userData: {
      address: '',
      banji: '',
      huizhang:'',
      img: '',
      loginname: '',
      name: '',
      nianji:'',
      password: '',
      phone: '',
      sex: '',
      txhname: '',
      yuanxi: '',
      zhuanye: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyInfo()
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
    let register = wx.getStorageSync('register')
    if (register) {
      this.setData({
        hometownList: register.hometownList,
        gradetxtList: register.gradetxtList,
        collegestxtList: register.collegestxtList,
        classtxtList: register.classtxtList,
        majortxtList: register.majortxtList,
      })
    }
  },
  // 获取个人信息
  getMyInfo() {
    let userInfo = wx.getStorageSync('userInfo')
    let data = {
      id: userInfo.id
    }
    app.alert.loading()
    app.ajax.getMyInfoFeach(data).then(res => {
      console.log(res)
      this.setData({
        userData: res.data
      })
      wx.setStorageSync('userInfo', res.data)
      app.alert.hideloading()
    }).catch(err => {
      app.alert.error(err.msg)
      app.alert.hideloading()
    })
  },
  changeMyInfo (e) {
    let that = this
    let type = e.currentTarget.dataset.type
    if (type === 'userImg') {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success(res) {
          that.setData({
            'userData.img': 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64')
          })
          that.changeOneInfo()
        }
      })
    } else if (type === 'name') {
      wx.navigateTo({
        url: '/pages/modifyMyInfo/modifyMyInfo?type=name',
      })
    } else if (type === 'phone') {
      wx.navigateTo({
        url: '/pages/modifyMyInfo/modifyMyInfo?type=phone',
      })
    } else if (type === 'password') {
      wx.navigateTo({
        url: '/pages/modifyMyInfo/modifyMyInfo?type=password',
      })
    }
  },
  bindPickerChange (e) {
    console.log(e)
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    if (type === 'hometown') {
      this.setData({
        'userData.address':this.data.hometownList[value]
      })
    } else if (type === 'gradetxt') {
      this.setData({
        'userData.nianji': this.data.gradetxtList[value]
      })
    } else if (type === 'collegestxt') {
      this.setData({
        'userData.yuanxi': this.data.collegestxtList[value]
      })
    } else if (type === 'classtxt') {
      this.setData({
        'userData.banji': this.data.classtxtList[value]
      })
    } else if (type === 'majortxt') {
      this.setData({
        'userData.zhuanye': this.data.majortxtList[value]
      })
    } else if (type === 'sex') {
      this.setData({
        'userData.sex': this.data.sexList[value]
      })
    }

    this.changeOneInfo()

  },
  //修改个人信息
  changeOneInfo () {
    let data = this.data.userData
    app.ajax.changeOneInfoFeach(data).then(res => {
      app.alert.error(res.msg)
      this.setMyInfo()
    }).catch(err => {
      app.alert.error(err.msg)
    })
  },
  setMyInfo() {
    let userInfo = wx.getStorageSync('userInfo')
    let data = {
      id: userInfo.id
    }
    app.ajax.getMyInfoFeach(data).then(res => {
      wx.setStorageSync('userInfo', res.data)
    }).catch(err => {
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