export const requestUrl = (url, data = {}, type) => {
  return new Promise((resolve, reject) => {
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: url,
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