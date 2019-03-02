import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import UserConfigService from "@/services/services/UserConfigurationService";
import Util from "@/lib/util";

Vue.config.productionTip = false;
console.log("hello world");
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
