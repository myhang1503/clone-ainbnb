import axios from "axios";
import configs from "../configs";

const axiosApi = axios.create({
  baseURL: configs.baseURL,
});

//call to server: call api => call interceptors => call server
axiosApi.interceptors.request.use(
  function (config) {
    //Do something before request is sent
    config.headers.tokenByClass = configs.tokenByClass;
    return config;
  },
  function (error) {
    //Do something with request error
    return Promise.reject(error);
  }
);

//from server return data...
axiosApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    //Do something with request error
    return Promise.reject(error);
  }
);

export default axiosApi;
