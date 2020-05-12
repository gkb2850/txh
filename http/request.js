export const requestUrl = (url, data = {}, type) => {
  return new Promise((resolve, reject) => {
    wx.request({
      header: {
        'content-type':'application/x-www-form-urlencoded',
        memId: wx.getStorageSync('userInfo').id || '',
        txhName: wx.getStorageSync('userInfo').txhname || ''
      },
      url: url,
      data: data,
      method: type,
      success: res =>{
        resolve(res.data)
      },
      fail: err => {
        reject(err.data)
      }
    })
  })
}