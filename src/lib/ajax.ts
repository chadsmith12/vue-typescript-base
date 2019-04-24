import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import AppConsts from "./appconsts";
import { SnackbarModule } from "@/store/modules/snackbar";
import SnackbarMessage from "@/core/user-interface-models/Snackbar";
import { SnackbarType } from "@/core/user-interface-models/ISnackbar";

const ajax: AxiosInstance = axios.create({
  baseURL: AppConsts.AppConsts.remoteServiceBaseUrl,
  timeout: 30000
});

// tslint:disable-next-line:typedef
ajax.interceptors.request.use(
  function(config: AxiosRequestConfig): AxiosRequestConfig {
    if (abp.auth.getToken()) {
      config.headers.common.Authorization = "Bearer " + window.abp.auth.getToken();
    }

    config.headers.common[".AspNetCore.Culture"] = abp.utils.getCookieValue(
      AppConsts.AppConsts.localizationCookieName
    );
    config.headers.common["Abp.TenantId"] = abp.multiTenancy.getTenantIdCookie();
    config.headers.common["Access-Control-Allow-Origin"] = "http://localhost:8082";
    return config;
  },
  function(error: any): Promise<never> {
    return Promise.reject(error);
  }
);

ajax.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // tslint:disable-next-line:no-debugger
    debugger;
    if (error.response && error.response.data.error && error.response.data.error.message) {
      SnackbarModule.SHOW_SNACKBAR(
        new SnackbarMessage(SnackbarType.Error, error.response.data.error.message)
      );
    } else if (!error.response) {
      SnackbarModule.SHOW_SNACKBAR(
        new SnackbarMessage(SnackbarType.Error, "Oops...something went wrong, try again later.")
      );
    }

    return Promise.reject(error);
  }
);

export default ajax;
