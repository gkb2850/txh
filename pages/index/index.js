//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    autoplay: false,
    interval: 3000,
    duration: 500,
    newsList: []
  },
  onLoad: function () {
    
  },
  onShow: function () {
    app.tologin()
    this.getIndexZixunList()
    this.getIndexList()
  },
  //获取首页资讯
  getIndexZixunList () {
    app.alert.loading()
    app.ajax.zixunFeach().then(res => {
      console.log(res)
      let data = res.data
      data.forEach(i => {
        let date = new Date(i.creattime)
        i.creattime = date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate())
      })
      this.setData({
        newsList: res.data
      })
      app.alert.hideloading()
    }).catch(err => {
      console.log(err)
      app.alert.hideloading()
      app.alert.error(err.msg)
    })
  },
  getIndexList() {
    app.ajax.indexFeach().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  },
  tozixunInfo (e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/zixunDetail/zixunDetail?id='+id,
    })
  },
})
