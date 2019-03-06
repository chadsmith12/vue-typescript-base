import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import UserConfigService from "@/services/services/UserConfigurationService";
import Util from "@/lib/util";
import appConsts from "@/lib/appconsts";
import { SessionModule } from "@/store/modules/session";
import "@/permissions";

Vue.config.productionTip = false;

Util.setLocalizationCookieIfNotSet(appConsts.AppConsts.localizationCookieName);

// setting the global abp object here
const userConfigService: UserConfigService = new UserConfigService();

userConfigService.getUserConfiguration().then(data => {
  Util.abp = Util.extend(true, Util.abp, data.result);
  new Vue({
    router,
    store,
    // tslint:disable-next-line:typedef
    async mounted() {
      await SessionModule.InitSession();
    },
    render: h => h(App)
  }).$mount("#app");
});
