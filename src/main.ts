import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UserConfigService from "@/services/services/UserConfigurationService";
import Util from "@/lib/util";
import appConsts from "@/lib/appconsts";

Vue.config.productionTip = false;

if (!window.abp.utils.getCookieValue(appConsts.AppConsts.localizationCookieName)) {
  let language: string = navigator.language;
  const cookieExpiration: Date = new Date(new Date().getTime() + 5 * 365 * 86400000);
  window.abp.utils.setCookieValue(
    appConsts.AppConsts.localizationCookieName,
    language,
    cookieExpiration,
    window.abp.appPath
  );
}

// setting the global abp object here
let userConfigService: UserConfigService = new UserConfigService();
userConfigService.getUserConfiguration().then(data => {
  Util.abp = Util.extend(true, Util.abp, data.result);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
});
