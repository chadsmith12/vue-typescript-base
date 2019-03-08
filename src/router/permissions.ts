import router from "@/router/router";
import { Route } from "vue-router";

// defines the routes that are whitelisted, that we can get to without authenticating
const whiteList: Array<string> = ["/login"];

router.beforeEach((to: Route, from: Route, next: any) => {
  const token: string = abp.auth.getToken();
  // first check to see if the user is logged in
  if (token !== null && token !== "") {
    // are we trying to access the login page? just go back home
    if (to.path === "/login") {
      next({ path: "/" });
    } else {
      // todo: check for permissions here
      // right now just go ahead
      next();
    }
  } else {
    // are we allowed to enter this path not logged in?
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      // redirect user to login page.
      next("/login");
    }
  }
});
