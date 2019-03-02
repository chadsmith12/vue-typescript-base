import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UserConfigService from "@/services/services/UserConfigurationService";
import SessionService from "@/services/services/SessionService";
import Util from "@/lib/util";
import appConsts from "@/lib/appconsts";
import { ILoginInformation } from "./lib/interfaces/ISession";

Vue.config.productionTip = false;

Util.setLocalizationCookieIfNotSet(appConsts.AppConsts.localizationCookieName);

// setting the global abp object here
const userConfigService: UserConfigService = new UserConfigService();
const sessionService: SessionService = new SessionService();

userConfigService.getUserConfiguration().then(data => {
  Util.abp = Util.extend(true, Util.abp, data.result);
  new Vue({
    router,
    store,
    // tslint:disable-next-line:typedef
    async mounted() {
      const loginInfo: ILoginInformation = await sessionService.getLoginInformation();
      console.log(loginInfo);
    },
    render: h => h(App)
  }).$mount("#app");
});
