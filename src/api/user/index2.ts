// ts 封装 axios, request是个函数，本身可以调用，同时具有get、post、put、delete属性
// 且返回结果是Pomise<Result<T>>,即后端返回的restful数据格式

import request from '@/utils/request2'
import type { UserInfoRes } from './types'
export const getUserInfoService2 = () => {
    return request<UserInfoRes>({
        url: '/user/1',
        method: 'get'
    })
}

export const getUserInfoApi = () => {
    return request.get<UserInfoRes>('/user/1')
}
