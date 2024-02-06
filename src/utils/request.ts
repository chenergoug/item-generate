import axios from 'axios'

const service = axios.create({
  baseURL: "/",
  timeout: 40000, 
  withCredentials: true
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },

  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;