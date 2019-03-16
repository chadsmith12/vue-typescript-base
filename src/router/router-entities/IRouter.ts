import IPermissionDependency from "@/core/permission-checker/IPermissionDependency";

export interface IRouterMeta {
  title: string;
  permission?: string;
  requiresAuth: boolean;
  icon?: string;
  permissionChecker?: IPermissionDependency;
}

export interface IRouter {
  path: string;
  name?: string;
  redirect?: string;
  meta?: IRouterMeta;
  component: any;
  children?: Array<IRouter>;
}
