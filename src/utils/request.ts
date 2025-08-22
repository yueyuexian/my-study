import axios from 'axios'

import type {
    AxiosRequestConfig,
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios'

/*  服务器返回数据的类型，根据接口文档确定 */
interface Result<T> {
    code: number
    message: string
    data: T
}

const request = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

/* 请求拦截器 */
request.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // ... 对请求做一些处理
        //  伪代码
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config
    },
    (error: AxiosError) => {
        // Message.error(error.message)
        // 返回一个失败状态的Promise对象，注意必须要return，以便链式调用.catch等
        return Promise.reject(error)
    }
)

/* 响应拦截器 */
request.interceptors.response.use(
    (response: AxiosResponse<Result<any>>) => {
        // 对响应数据做些处理

        // 根据业务状态码判断是否成功，比如 0 表示成功，1或其它 表示失败
        if (response.data.code === 0) {
            // 成功将data数据返回
            return response.data.data
        } else {
            // Message.error(response.data.message)
            return Promise.reject(response.data)
        }
    },
    (error: AxiosError) => {
        /* 响应状态码status超过2xx的都会经过这里 */

        // 处理 HTTP 网络错误
        // let message = ''
        // HTTP 状态码
        // const status = error.response?.status
        // switch (status) {
        //     case 401:
        //         message = 'token 失效，请重新登录'
        //         // 这里可以触发退出的 action
        //         break
        //     case 403:
        //         message = '拒绝访问'
        //         break
        //     case 404:
        //         message = '请求地址错误'
        //         break
        //     case 500:
        //         message = '服务器故障'
        //         break
        //     default:
        //         message = '网络连接故障'
        // }

        // Message.error(message)
        return Promise.reject(error)
    }
)

/* 导出封装的请求方法 */
// 封装这一层公共请求方法，主要目的就是为了帮编译器正确识别类型。方法就是手动设置返回类型。
const http = {
    // 如果我们不封装指定返回值类型，那么默认返回值类型就是 Promise<AxiosResponse<any, any>>
    // get(url: string, config: AxiosRequestConfig) {
    //     return request.get(url, config)
    // }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return request.get(url, config)
    },

    post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        return request.post(url, data, config)
    },

    put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
        return request.put(url, data, config)
    },

    delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return request.delete(url, config)
    }
}
export default http
