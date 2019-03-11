import router from "@/router/router";
import { Route } from "vue-router";
import { AppModule } from "@/store/modules/app";
import appconsts from "@/lib/appconsts";

// defines the routes that are whitelisted, that we can get to without authenticating
const whiteList: Array<string> = ["/login"];

router.beforeEach((to: Route, from: Route, next: any) => {
  const requiresAuth: boolean = to.matched.some(record => record.meta.requiresAuth);

  AppModule.pendingRoute();

  //  the route doesn't require authentication, just let it go on
  if (!requiresAuth) {
    next();
  } else {
    // we know the route requires authentication
    // if we don't have a user then redirect back to login
    if (abp.auth.getToken() === "") {
      next({
        name: "Login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  }

  AppModule.routeCompleted();

  document.title = appconsts.AppConsts.appName;
});
