//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    autoplay: false,
    interval: 3000,
    duration: 500,
    newsList: [
      {
        src: '../../assets/images/lanqiu.jpg',
        titletxt:'揭阳同乡会篮球队招募新生',
        nametxt:'古哒哒',
        time: '2020-04-28'
      },
      {
        src: '../../assets/images/jiewu.jpg',
        titletxt: '惠州同乡会街舞招募新生',
        nametxt: '古哒哒',
        time: '2020-05-28'
      },
      {
        src: '../../assets/images/lunhua.jpg',
        titletxt: '广州同乡会轮滑队招募新生',
        nametxt: '刘哒哒',
        time: '2020-06-28'
      },
      {
        src: '../../assets/images/haibian.jpg',
        titletxt: '深圳同乡会海边一天游',
        nametxt: '张哒哒',
        time: '2020-07-28'
      },
      {
        src: '../../assets/images/lanqiuchang.jpg',
        titletxt: '东莞同乡会篮球队篮球场浏览一天',
        nametxt: '罗哒哒',
        time: '2020-08-28'
      },
      {
        src: '../../assets/images/ketianxia.jpg',
        titletxt: '河源同乡会客天下游玩自助一天',
        nametxt: '刘哒哒',
        time: '2020-09-28'
      },
      {
        src: '../../assets/images/piaoliu.jpg',
        titletxt: '清远同乡会秋季漂流两天一夜',
        nametxt: '李哒哒',
        time: '2020-10-28'
      }
    ]
  },
  onLoad: function () {
    
  },
})
