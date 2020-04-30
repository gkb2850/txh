// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    register: {
      userImg:'',
      name: '',
      phone: '',
      sex: '0',
      hometown:'请选择',
      gradetxt: '请选择',
      collegestxt:'请选择',
      classtxt:'请选择',
      majortxt:'请选择',
      accNum:'',
      password: '',
      passwords:''
      },
    sexList: [
      { name: '男', value: '0', checked: 'true' },
      { name: '女', value: '1' }
    ],
    hometownList: ['广东', '梅州', '五华', '华城'],
    gradetxtList: ['大四', '大三', '大二', '大一'],
    collegestxtList: ['建筑', '机电', '信息', '外语'],
    classtxtList: ['电商', '计网', '软件', '信息'],
    majortxtList: ['计算机','软件','网络技术','前端开发'],
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
  //性别改变
  radioChange (e) {
    this.setData({
      'register.sex':e.detail.value
    })
  },
  //选择头像
  toSelectImg () {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success(res) {
        console.log(res)
        that.setData({
          'register.userImg': 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64')
        })
      }
    })
  },
  inputName (e) {
    let value = e.detail.value
    this.setData({
      'register.name': value
    })
  },
  inputPhone(e) {
    let value = e.detail.value
    this.setData({
      'register.phone': value
    })
  },
  inputAccNum(e) {
    let value = e.detail.value
    this.setData({
      'register.accNum': value
    })
  },
  inputPassword(e) {
    let value = e.detail.value
    this.setData({
      'register.password': value
    })
  },
  inputPasswords(e) {
    let value = e.detail.value
    this.setData({
      'register.passwords': value
    })
  },
  blurPasswords(e) {
    if (this.data.register.password !== this.data.register.passwords) {
      this.setData({
        'register.passwords': ''
      })
      wx.showToast({
        title: '两次密码不一致，请重新输入！',
        icon: 'none',
        duration: 1000
      })
    }
  },
  inputName(e) {
    let value = e.detail.value
    this.setData({
      'register.name': value
    })
  },
  bindPickerChangeHometown (e) {
    let value = e.detail.value
    this.setData({
      'register.hometown': this.data.hometownList[value]
    })
  },
  bindPickerChangeGradetxt(e) {
    let value = e.detail.value
    this.setData({
      'register.gradetxt': this.data.gradetxtList[value]
    })
  },
  bindPickerChangeCollegestxt(e) {
    let value = e.detail.value
    this.setData({
      'register.collegestxt': this.data.collegestxtList[value]
    })
  },
  bindPickerChangeClasstxt(e) {
    let value = e.detail.value
    this.setData({
      'register.classtxt': this.data.classtxtList[value]
    })
  },
  bindPickerChangeMajortxt(e) {
    let value = e.detail.value
    this.setData({
      'register.majortxt': this.data.majortxtList[value]
    })
  },
  //注册
  toRegister () {
    console.log(this.data.register)
    if (this.data.register.userImg === '' || this.data.register.name === '' || this.data.register.phone === '' || this.data.register.hometown === '请选择' || this.data.register.gradetxt === '请选择' || this.data.register.collegestxt === '请选择' || this.data.register.classtxt === '请选择' || this.data.register.majortxt === '请选择' || this.data.register.accNum === '' || this.data.register.password === '' || this.data.register.passwords === '') {
      wx.showToast({
        title: '请填写完整！',
        icon: 'none',
        duration: 1000
      })
      return
    }
    console.log(this.data.register)
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