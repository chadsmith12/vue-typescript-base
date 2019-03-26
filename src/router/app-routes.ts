import { IRouter } from "@/router/router-entities/IRouter";
import MainLayout from "@/views/Main.vue";
import SimplePermissionChecker from "@/core/permission-checker/SimplePermissionChecker";

export const appRoutes: Array<IRouter> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
    meta: {
      title: "Home",
      requiresAuth: true,
      icon: "mdi-view-dashboard"
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/about/About.vue"),
    meta: {
      title: "About",
      requiresAuth: true,
      icon: "mdi-clipboard-outline"
    }
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/views/users/Users.vue"),
    meta: {
      title: "Users",
      requiresAuth: true,
      icon: "mdi-account-group",
      permissionChecker: new SimplePermissionChecker(["Pages.Users"])
    }
  },
  {
    path: "/tenants",
    name: "Tenants",
    component: () => import("@/views/users/Users.vue"),
    meta: {
      title: "Tenants",
      requiresAuth: true,
      icon: "mdi-account-group",
      permissionChecker: new SimplePermissionChecker(["Pages.Tenants"])
    }
  }
];

export const appRouter: IRouter = {
  path: "/",
  component: MainLayout,
  children: appRoutes
};
