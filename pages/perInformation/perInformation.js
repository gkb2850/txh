// pages/perInformation/perInformation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    register: {
      userImg: '',
      name: '',
      phone: '',
      sex: '',
      hometown: '',
      gradetxt: '',
      collegestxt: '',
      classtxt: '',
      majortxt: '',
      password: '',
      passwords: ''
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
  changeMyInfo (e) {
    let type = e.currentTarget.dataset.type
    if (type === 'userImg') {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success(res) {
          const tempFilePaths = res.tempFilePaths
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