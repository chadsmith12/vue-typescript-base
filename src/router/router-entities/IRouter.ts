export interface IRouterMeta {
  title: string;
  permission?: string;
  requiresAuth: boolean;
  icon?: string;
}

export interface IRouter {
  path: string;
  name?: string;
  redirect?: string;
  meta?: IRouterMeta;
  component: any;
  children?: Array<IRouter>;
}
