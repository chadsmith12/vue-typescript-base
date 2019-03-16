import { IRouter } from "@/router/router-entities/IRouter";

export const authRouter: IRouter = {
  path: "/account",
  component: () => import("@/views/Auth.vue"),
  children: [
    {
      path: "login",
      name: "Login",
      component: () => import("@/views/account/Login.vue")
    }
  ],
  meta: {
    title: "Login",
    requiresAuth: false
  }
};
