import { IRouter } from "@/router/router-entities/IRouter";
import MainLayout from "@/views/Main.vue";

export const appRouter: IRouter = {
  path: "/",
  component: MainLayout,
  children: [
    {
      path: "",
      name: "Home",
      component: () => import("@/views/home/Home.vue")
    },
    {
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "@/views/about/About.vue")
    }
  ]
};
