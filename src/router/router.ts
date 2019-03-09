import Vue from "vue";
import Router from "vue-router";
import MainLayout from "@/views/Main.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: () => import("@/views/Home.vue")
        },
        {
          path: "/about",
          name: "About",
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
        }
      ]
    },
    {
      path: "/account",
      component: () => import("@/views/Auth.vue"),
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import("@/views/account/Login.vue")
        }
      ]
    }
  ]
});
