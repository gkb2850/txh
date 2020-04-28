// pages/news/news.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeityList: [
      {
        title: '揭阳同乡会篮球队招募新生',
        src:'../../assets/images/timg.jpg',
        infoTxt: '这次招募的主要是大一新生，让新生快速融入新的集体,营造良好的校园环境',
        people: '李哒哒',
        time: '2020-4-24'
      },
      {
        title: '揭阳同乡会羽毛球队',
        src: '../../assets/images/yumaoqiu.jpg',
        infoTxt: '这次招募招募活动是梅州同乡组织的一次大型的校园活动比赛招募',
        people: '古哒哒',
        time: '2020-6-18'
      },
      {
        title: '揭阳同乡会捐书活动',
        src: '../../assets/images/juanshu.jpg',
        infoTxt: '这次招募的活动是一项很有意义的活动，为了让本校学生多余的课本不浪费，举办捐书活动',
        people: '陈哒哒',
        time: '2020-4-28'
      },
      {
        title: '揭阳同乡会植树节春游活动',
        src: '../../assets/images/zhishu.jpg',
        infoTxt: '春天是一年中最美的季节,是学生踏青春游的好季节。通过踏青春游活动,让学生亲密接触大自然',
        people: '刘哒哒',
        time: '2020-5-20'
      },
      {
        title: '揭阳同乡会举办书法大赛',
        src: '../../assets/images/shufa.jpg',
        infoTxt: '为继承和发扬我国书法艺术传统，弘扬爱国主义精神，我们将承办的现场书法大赛',
        people: '廖哒哒',
        time: '2020-5-10'
      }
    ]
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
  toSeePhone () {
    wx.showActionSheet({
      itemList: ['会长电话：2222222222', '管理员电话：333333333333'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex === 0) {
          wx.makePhoneCall({
            phoneNumber: '2222222222'
          })
        } else {
          wx.makePhoneCall({
            phoneNumber: '33333333'
          })
        }
      },
      fail(res) {
        console.log(res.errMsg)
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