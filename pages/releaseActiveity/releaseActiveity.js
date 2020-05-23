// pages/releaseActiveity/releaseActiveity.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acitveData: {
      firstDay: '填写开始时间',
      lastDay: '填写结束时间',
      fmImg: '../../assets/images/morenfengmiantu.png',
      fmImgs: '',
      title: '',
      jianjietxt: '',
      people: '',
      phone: '',
      address: ''
    },
    formats: {},
    nodes: [],
    userData: {}
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
    let userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.setData({
        userData: userInfo
      })
    }
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)

  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  onEditorReady(e) {
    let that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  bindDateChange(e) {
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    console.log(e)
    if (type === 'firstDay') {
      this.setData({
        'acitveData.firstDay': value
      })
    } else if (type === 'lastDay') {
      this.setData({
        'acitveData.lastDay': value
      })
    }
  },
  toRelease () {
    let that = this
    this.editorCtx.getContents({
      success: res => {
        that.setData({
          nodes: res.html
        })
        that.setActiveInfo()
      }
    })

  },
  // 发布活动
  setActiveInfo () {
    console.log(this.data.acitveData)
    if (this.data.acitveData.title === '' || this.data.acitveData.jianjietxt === '' || this.data.acitveData.phone === '' || this.data.acitveData.people === '' || this.data.acitveData.fmImgs === '' || this.data.acitveData.firstDay === '填写开始时间' || this.data.acitveData.lastDay === '填写结束时间' || this.data.acitveData.address === '') {
      app.alert.error('请填写完整')
      return
    }
    let date = new Date
    let data = {
      id: '',
      title: this.data.acitveData.title,
      intro: this.data.acitveData.jianjietxt,
      memid: this.data.userData.id,
      memname: this.data.userData.name,
      img: this.data.acitveData.fmImgs,
      content: this.data.nodes,
      creattime: date.getFullYear() + '-'+ (date.getMonth() + 1) + '-' + date.getDate(),
      phone: this.data.acitveData.phone,
      name: this.data.userData.txhname,
      address: this.data.acitveData.address,
      createby:this.data.acitveData.people,
      endtime: this.data.acitveData.lastDay,
      starttime: this.data.acitveData.firstDay
    }
    app.ajax.fatxhFeach(data).then(res => {
      console.log(res)
      if (res.code === 200) {
        app.alert.error('发布成功')
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
      } else {
        app.alert.error('发布失败，请重试！')
      }
    }).catch(err => {
      console.log(err)
      app.alert.error('发布失败，请重试！')
    })
  },
  inputphone (e) {
    let value = e.detail.value
    if (value === '') {
      app.alert.error('号码不能为空')
      return
    }

    if (!(/^1[3456789]\d{9}$/.test(value))) {
      app.alert.error('请输入正确的号码')
      return
    }
    this.setData({
      'acitveData.phone':value
    })
  },
  inputpeople(e) {
    let value = e.detail.value
    this.setData({
      'acitveData.people': value
    })
  },
  inputjianjie(e) {
    let value = e.detail.value
    this.setData({
      'acitveData.jianjietxt': value
    })
  },
  inputtitle(e) {
    let value = e.detail.value
    this.setData({
      'acitveData.title': value
    })
  },
  inputaddress(e) {
    let value = e.detail.value
    this.setData({
      'acitveData.address': value
    })
  },
  toSelectImg () {
    let that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album'],
      success(res) {
        that.setData({
          'acitveData.fmImgs': 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64'),
          'acitveData.fmImg': 'data:image/png;base64,' + wx.getFileSystemManager().readFileSync(res.tempFilePaths[0], 'base64')
        })
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