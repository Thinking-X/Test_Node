import axios from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: "https://localhost:5001",
  timeout: 5000 // 请求超时时间
});

let getToken = () => {
  let jwtToken = sessionStorage.getItem("jwtToken");
  if (jwtToken === null) {
    //window.location.href = '/Login'
    return;
  }
  return "Bearer " + jwtToken;
};

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers.Authorization = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * status为非0是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.status && Number(res.status) != 0) {
      console.log(res);
      return Promise.reject("error");
    } else {
      return response.data;
    }
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
