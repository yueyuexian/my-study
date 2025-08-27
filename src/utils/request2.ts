/**
 * ts 封装 axios, request是个函数，本身可以调用，同时具有get、post、put、delete属性
 * 且返回结果是Pomise<Result<T>>,即后端返回的restful数据格式,包含code、message、data
 */
import axios, {
    AxiosError,
    type AxiosInstance,
    type AxiosRequestConfig,
    type AxiosResponse,
    type InternalAxiosRequestConfig
} from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

// 请求拦截器

instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        config.headers!.Authorization = 'Bearer ' + localStorage.getItem('token')
        return config
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)

// 响应拦截器

instance.interceptors.response.use(
    (res: AxiosResponse) => {
        return res.data
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)

interface Result<T> {
    code: number
    message: string
    data: T
}

// 封装请求方法

function request<T>(config: AxiosRequestConfig): Promise<Result<T>> {
    return instance(config)
}

// 给request函数对象添加属性
request.get = <T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> => {
    return instance.get(url, config)
}
request.post = <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> => {
    return instance.post(url, data, config)
}

request.put = <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<Result<T>> => {
    return instance.put(url, data, config)
}

request.delete = <T>(url: string, config?: AxiosRequestConfig): Promise<Result<T>> => {
    return instance.delete(url, config)
}

export default request
