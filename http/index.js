import {requestUrl} from './request.js'

const baseUrl = 'http://sun.buxiaosheng.com'

export const loginFeach = (data) =>  requestUrl(baseUrl + '/login' , data, 'post');//登录接口

