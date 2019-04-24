import Vue from "vue";
import GAuth from "vue-google-oauth2";
import appConsts from "@/lib/appconsts";
import { IGoogleAuth } from "@/core/const-models/IGoogleAuth";

if (appConsts.AppConsts.authorization.googleAuth != null) {
  const gauthOptions: IGoogleAuth = appConsts.AppConsts.authorization.googleAuth;

  Vue.use(GAuth, gauthOptions);
}
