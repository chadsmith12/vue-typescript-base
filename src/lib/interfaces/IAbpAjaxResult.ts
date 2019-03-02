export default interface IAbpAjaxResult<T> {
  error: Object;
  result: T;
  success: boolean;
  targetUrl: string;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}
