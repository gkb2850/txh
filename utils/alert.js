export const success = (msg) => {
  wx.showToast({
    title: msg || '成功加载',
    icon: 'success',
    duration: 1000
  })
}

export const error = (msg) => {
  wx.showToast({
    title: msg || '加载失败',
    icon: 'none',
    duration: 1000
  })
}