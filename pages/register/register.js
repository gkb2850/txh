// pages/register/register.js
const app = getApp()
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
      collegestxt:'',
      classtxt:'',
      majortxt:'',
      accNum:'',
      password: '',
      passwords:''
      },
    sexList: [
      { name: '男', value: '0', checked: 'true' },
      { name: '女', value: '1' }
    ],
    hometownList: [],
    gradetxtList: ['2020级', '2019级', '2018级', '2017级','2016级']
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
    this.gettxhList()
    let register = wx.getStorageSync('register');
    if (!register) {
      let obj = {}
      obj.gradetxtList = this.data.gradetxtList
      wx.setStorageSync('register', obj)
    }
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
  inputAddress (e) {
    let value = e.detail.value
    this.setData({
      'register.address': value
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
  inputCollegestxt (e) {
    let value = e.detail.value
    this.setData({
      'register.collegestxt': value
    })
  },
  inputClasstxt(e) {
    let value = e.detail.value
    this.setData({
      'register.classtxt': value
    })
  },
  inputMajortxt(e) {
    let value = e.detail.value
    this.setData({
      'register.majortxt': value
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

    let data = {
      id:'',
      name: this.data.register.name,
      loginname: this.data.register.accNum,
      password: this.data.register.password,
      img: this.data.register.userImg,
      phone: this.data.register.phone,
      sex:this.data.register.sex === '0' ? '男' : '女',
      address: this.data.register.address,
      nianji: this.data.register.gradetxt,
      yuanxi: this.data.register.collegestxt,
      banji: this.data.register.classtxt,
      zhuanye: this.data.register.majortxt,
      txhname: this.data.register.hometown

    }
    app.ajax.reqFeach(data).then(res => {
      if (res.code === 200) {
        app.alert.error('注册成功')
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }, 1000)
      } else {
        app.alert.error('网络问题，请重试')
      }
    }).catch(err => {
      app.alert.error('注册失败，请重试！')
    })
  },
  //获取同乡会
  gettxhList() {
    let data = {}
    app.ajax.gettxhListFeach(data).then(res => {
      console.log(res)
      let data = res.data
      let arr = []
      data.forEach(i => {
        arr.push(i.name)
      })
      this.setData({
        hometownList: arr
      })
      wx.setStorageSync('txhList', res.data)
    }).catch(err => {
      console.log(err)
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