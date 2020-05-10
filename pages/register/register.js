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
      hometownId: '',
      hometown:'请选择',
      gradetxtId: '',
      gradetxt: '请选择',
      collegestxtId: '',
      collegestxt:'请选择',
      classtxtId: '',
      classtxt:'请选择',
      majortxtId: '',
      majortxt:'请选择',
      accNum:'',
      password: '',
      passwords:''
      },
    sexList: [
      { name: '男', value: '0', checked: 'true' },
      { name: '女', value: '1' }
    ],
    hometownListObj: [ 
      {
        name: '广州',
        id: 1
      },
      {
        name: '深圳',
        id: 2
      },
      {
        name: '珠海',
        id: 3
      },
      {
        name: '汕头',
        id: 4
      }, 
      {
        name: '佛山',
        id: 5
      },
      {
        name: '韶关',
        id: 6
      },
      {
        name: '湛江',
        id: 7
      },
      {
        name: '肇庆',
        id: 8
      },
      {
        name: '江门',
        id: 9
      },
      {
        name: '茂名',
        id: 10
      },
      {
        name: '惠州',
        id: 11
      },
      {
        name: '梅州',
        id: 12
      },
      {
        name: '汕尾',
        id: 13
      },
      {
        name: '河源',
        id: 14
      },
      {
        name: '阳江',
        id: 15
      },
      {
        name: '清远',
        id: 16
      },
      {
        name: '东莞',
        id: 17
      },
      {
        name: '中山',
        id: 18
      },
      {
        name: '潮州',
        id: 19
      },
      {
        name: '揭阳',
        id: 20
      },
      {
        name: '云浮',
        id: 21
      }],
    hometownList: ['广州', '深圳','珠海','汕头','佛山','韶关','湛江','肇庆','江门','茂名','惠州','梅州','汕尾','河源','阳江','清远','东莞','中山','潮州','揭阳','云浮'],
    gradetxtListObj: [
      {
        name: '大四',
        id: 1
      },
      {
        name: '大三',
        id: 1
      },
      {
        name: '大二',
        id: 1
      },
      {
        name: '大一',
        id: 1
      }],
    gradetxtList: ['大四', '大三', '大二', '大一'],
    collegestxtListObj: [
      {
        name: '建筑',
        id: 1
      },
      {
        name: '机电',
        id: 2
      },
      {
        name: '信息',
        id: 3
      },
      {
        name: '外语',
        id: 4
      },
      {
        name: '人文',
        id: 5
      },
      {
        name: '幼师',
        id: 6
      }],
    collegestxtList: ['建筑','机电','信息','外语','人文','幼师'],
    classtxtListObj: [
      {
        name: '电商班',
        id: 1
      },
      {
        name: '计算机网络技术班',
        id: 2
      },
      {
        name: '软件开发班',
        id: 3
      },
      {
        name: '商务英语班',
        id: 4
      },
      {
        name: '学前教育班',
        id: 5
      },
      {
        name: '建筑班',
        id: 6
      },
      {
        name: '机电班',
        id: 7
      }],
    classtxtList: ['电商班','计算机网络技术班','软件开发班','商务英语班','学前教育班','建筑班','机电班'],
    majortxtListObj: [
      {
        name: '计算机网络技术',
        id: 1
      },
      {
        name: '软件开发',
        id: 2
      },
      {
        name: '商务英语',
        id: 3
      },
      {
        name: '学前教育',
        id: 4
      },
      {
        name: '电商',
        id: 5
      },
      {
        name: '程序设计',
        id: 6
      },
      {
        name: '传感技术',
        id: 7
      },
      {
        name: '大学物理',
        id: 8
      }],
    majortxtList: ['计算机网络技术','商务英语','学前教育','电商','程序设计','传感技术','大学物理']
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
  bindPickerChangeHometown (e) {
    let value = e.detail.value
    this.setData({
      'register.hometown': this.data.hometownList[value],
      'register.hometownId': this.data.hometownList[value].id
    })
  },
  bindPickerChangeGradetxt(e) {
    let value = e.detail.value
    this.setData({
      'register.gradetxt': this.data.gradetxtList[value],
      'register.gradetxtId': this.data.gradetxtList[value].id
    })
  },
  bindPickerChangeCollegestxt(e) {
    let value = e.detail.value
    this.setData({
      'register.collegestxt': this.data.collegestxtList[value],
      'register.collegestxtId': this.data.collegestxtList[value].id
    })
  },
  bindPickerChangeClasstxt(e) {
    let value = e.detail.value
    this.setData({
      'register.classtxt': this.data.classtxtList[value],
      'register.classtxtId': this.data.classtxtList[value].id
    })
  },
  bindPickerChangeMajortxt(e) {
    let value = e.detail.value
    this.setData({
      'register.majortxt': this.data.majortxtList[value],
      'register.majortxtId': this.data.majortxtList[value].id
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