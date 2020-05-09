// pages/perInformation/perInformation.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    register: {
      userImg: '../../assets/images/userImg.jpg',
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
    hometownList: ['广东', '梅州', '五华', '华城'],
    gradetxtList: ['大四', '大三', '大二', '大一'],
    collegestxtList: ['建筑', '机电', '信息', '外语'],
    classtxtList: ['电商', '计网', '软件', '信息'],
    majortxtList: ['计算机', '软件', '网络技术', '前端开发'],
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

  },
  // 获取个人信息
  getMyInfo() {
    let data = {
      id: 1
    }
    app.ajax.getMyInfoFeach(data).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
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
            'register.userImg': 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64')
          })
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
        'register.hometown':this.data.hometownList[value]
      })
    } else if (type === 'gradetxt') {
      this.setData({
        'register.gradetxt': this.data.gradetxtList[value]
      })
    } else if (type === 'collegestxt') {
      this.setData({
        'register.collegestxt': this.data.collegestxtList[value]
      })
    } else if (type === 'classtxt') {
      this.setData({
        'register.classtxt': this.data.classtxtList[value]
      })
    } else if (type === 'majortxt') {
      this.setData({
        'register.majortxt': this.data.majortxtList[value]
      })
    } else if (type === 'sex') {
      this.setData({
        'register.sex': this.data.sexList[value]
      })
    }
  },
  //修改个人信息
  changeOneInfo () {
    let data = {
      id: '',
      name: this.data.register.name,
      loginname: '',
      password: this.data.register.password,
      img: '',
      phone: this.data.register.phone,
      sex: this.data.register.sex,
      address: this.data.register.address,
      nianji: this.data.register.nianji,
      yuanxi: this.data.register.yuanxi,
      banji: this.data.register.banji,
      zhuanye: this.data.register.zhuanye,
      huizhang: '',
      txhname: ''
    }
    app.ajax.changeOneInfoFeach(data).then(res => {
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