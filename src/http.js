import axios from 'axios'
import router from './router'

// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 发送请求前
    // let hash = location.hash.split('?')[0];
    // config.headers['Step-Url'] = location.pathname + hash;
    // return config;
  },
  error => {
    // 请求错误处理
    return Promise.reject(error);
  })

// 响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
      case 401:
        router.replace({
          path: '/home'
        })
        break;
      case 404:
        router.replace({
          path: '/home'
        })
        break;
      }
    }
    return Promise.reject(error.response.data);
  })
export default axios;
