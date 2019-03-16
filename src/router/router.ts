import Vue from "vue";
import Router from "vue-router";
import { appRouter } from "@/router/app-routes";
import { authRouter } from "@/router/auth-routes";
import { errorRoutes } from "@/router/error-routes";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [appRouter, authRouter, errorRoutes]
});
