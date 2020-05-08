import {requestUrl} from './request.js'

const baseUrl = 'http://sun.buxiaosheng.com'

export const loginFeach = (data) =>  requestUrl(baseUrl + '' , data, 'get');//登录接口

