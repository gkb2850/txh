import {requestUrl} from './request.js'

const baseUrl = 'http://192.168.31.82:8080'

export const loginFeach = (data) => requestUrl(baseUrl + '/login', data, 'POST');//登录接口
export const indexFeach = (data) => requestUrl(baseUrl + '/index', data, 'POST');//首页接口
export const zixunFeach = (data) => requestUrl(baseUrl + '/zixun', data, 'POST');//首页资讯接口
export const tuipiaoFeach = (data) => requestUrl(baseUrl + '/tuipiao', data, 'POST');//退票
export const piaolistFeach = (data) => requestUrl(baseUrl + '/piaolist', data, 'POST');//车票列表
export const getMyInfoFeach = (data) => requestUrl(baseUrl + '/myinfo', data, 'POST');//个人信息
export const changeOneInfoFeach = (data) => requestUrl(baseUrl + '/xiugaiinfo', data, 'POST');//修改个人信息
export const fatxhFeach = (data) => requestUrl(baseUrl + '/fatxh', data, 'POST');//发布同乡会活动
export const huoquyonghuFeach = (data) => requestUrl(baseUrl + '/huoquyonghu', data, 'POST');//获取该同乡会用户
export const huodonglistFeach = (data) => requestUrl(baseUrl + '/huodonglist', data, 'POST');//活动列表
export const delhuodongFeach = (data) => requestUrl(baseUrl + '/delhuodong', data, 'POST');//删除活动
export const fachepiaoFeach = (data) => requestUrl(baseUrl + '/fachepiao', data, 'POST');//发布车票
export const ticketlistFeach = (data) => requestUrl(baseUrl + '/ticketlist', data, 'POST');//会长车票管理
export const activitylistFeach = (data) => requestUrl(baseUrl + '/activitylist', data, 'POST');//我的活动
export const myticketlistFeach = (data) => requestUrl(baseUrl + '/myticketlist', data, 'POST');//我的车票
export const bugtilistFeach = (data) => requestUrl(baseUrl + '/bugtilist', data, 'POST');//车票列表
export const huizhangphoneFeach = (data) => requestUrl(baseUrl + '/huizhangphone', data, 'POST');//会长电话
export const huodongFeach = (data) => requestUrl(baseUrl + '/huodong', data, 'POST');//同乡会活动
export const jiahuodongFeach = (data) => requestUrl(baseUrl + '/jiahuodong', data, 'POST');//参加活动

