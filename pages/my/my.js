// pages/my/my.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    huizhangPhone: '',
    userInfo: '',
    hometownList: ['广州', '深圳', '珠海', '汕头', '佛山', '韶关', '湛江', '肇庆', '江门', '茂名', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
    gradetxtList: ['大四', '大三', '大二', '大一'],
    collegestxtList: ['建筑', '机电', '信息', '外语', '人文', '幼师'],
    classtxtList: ['电商班', '计算机网络技术班', '软件开发班', '商务英语班', '学前教育班', '建筑班', '机电班'],
    majortxtList: ['计算机网络技术', '商务英语', '学前教育', '电商', '程序设计', '传感技术', '大学物理']
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
    let userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.setData({
        userInfo: userInfo
      })
    }
    let data = wx.getStorageSync('register')
    if (!data) {
      let register = {}
      register.hometownList = this.data.hometownList
      register.gradetxtList = this.data.gradetxtList
      register.collegestxtList = this.data.collegestxtList
      register.classtxtList = this.data.classtxtList
      register.majortxtList = this.data.majortxtList
      wx.setStorageSync('register', register)
    }
    this.gethuizhangPhone()
  },
  //去登陆
  toLogin () {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  //去注册
  toRegister () {
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },

  toSeePhone() {
    wx.showActionSheet({
      itemList: ['会长电话：' + this.data.huizhangPhone],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex === 0) {
          wx.makePhoneCall({
            phoneNumber: '2222222222'
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  // 获取会长电话
  gethuizhangPhone () {
    let data = {
      txhname: this.data.userInfo.txhname
    }
    app.ajax.huizhangphoneFeach(data).then(res => {
      console.log(res)
      this.setData({
        huizhangPhone: res.data.phone
      })
    }).catch(err => {
      console.log(err)
    })
  },
  totuichu () {
    let that = this
    wx.showModal({
      title: '退出提示',
      content: '确定要退出吗？',
      success(res) {
        if (res.confirm) {
          wx.removeStorageSync('userInfo')
          wx.reLaunch({
            url: '/pages/login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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