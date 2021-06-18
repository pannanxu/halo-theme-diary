import axios from 'axios'

const {baseApiUrl, APIAuthorization} = config.api;

const request = axios.create({
    baseURL: baseApiUrl
})

// 添加一个请求的拦截
request.interceptors.request.use((config) => {
    // 设置统一header头
    config.headers['API-Authorization'] = APIAuthorization
    return config;
}, (error) => {
    // 请求错误时做点事

    return Promise.reject(error);
});

//响应拦截
request.interceptors.response.use(resp => {

    const {status, message, data} = resp.data

    if (status === 404) {
        return Promise.reject(new Error(data));
    }

    if (status === 200) {
        return data;
    }

    return resp;
}, error => {
    return Promise.reject(new Error(error));
})
export default request
