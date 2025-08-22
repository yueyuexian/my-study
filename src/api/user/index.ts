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
