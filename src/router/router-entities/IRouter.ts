export interface IRouterMeta {
  title: string;
}

export interface IRouter {
  path: string;
  name?: string;
  redirect?: string;
  icon?: string;
  permission?: string;
  meta?: IRouterMeta;
  component: any;
  children?: Array<IRouter>;
}
