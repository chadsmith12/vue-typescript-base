import { IRouter } from "@/router/router-entities/IRouter";
import NotFound from "@/views/NotFound.vue";

export const errorRoutes: IRouter = {
  path: "*",
  component: NotFound
};
