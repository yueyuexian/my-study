// ts 封装 axios, http是个对象，具有get、post、put、delete属性
// 且返回结果是Pomise<T>,即后端返回的restful数据格式中的data

import http from '@/utils/request'

import type { LoginData, LoginRes, UserInfoRes } from './types'

/**
 * 登录
 */
// export function login(data: LoginData) {
//     return http.post<LoginRes>('/user/login', data)
// }

/**
 * 获取登录用户信息
 */
export function getUserInfoService() {
    return http.get<UserInfoRes>('/user/1')
}
