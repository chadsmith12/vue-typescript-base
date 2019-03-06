import axios, { AxiosInstance } from "axios";
import AppConsts from "./appconsts";

const ajax: AxiosInstance = axios.create({
  baseURL: AppConsts.AppConsts.remoteServiceBaseUrl,
  timeout: 30000
});

// tslint:disable-next-line:typedef
ajax.interceptors.request.use(function(config) {
  if (!!abp.auth.getToken()) {
    config.headers.common.Authorization = "Bearer " + window.abp.auth.getToken();
  }
  return config;
});

export default ajax;
