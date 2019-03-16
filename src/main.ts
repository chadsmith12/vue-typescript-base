// the vue build version to load with import
import Vue from "vue";

// load in components
import "@/components";

// load in plugins
import "@/plugins";

// application imports
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import UserConfigService from "@/services/services/UserConfigurationService";
import Util from "@/lib/util";
import appConsts from "@/lib/appconsts";
import { SessionModule } from "@/store/modules/session";
import { ILoginInformation } from "@/core/interfaces/ISession";
import "@/router/permissions";

Vue.config.productionTip = false;

Util.setLocalizationCookieIfNotSet(appConsts.AppConsts.localizationCookieName);

const userConfigService: UserConfigService = new UserConfigService();

new Vue({
  router,
  store,
  // tslint:disable-next-line:typedef
  async mounted() {
    const userConfig: Promise<any> = userConfigService.getUserConfiguration();
    const initSession: Promise<ILoginInformation> = SessionModule.InitSession();
    const userConfigData: any = await userConfig;
    Util.abp = Util.extend(true, Util.abp, userConfigData.result);
    await initSession;
  },
  render: h => h(App)
}).$mount("#app");
