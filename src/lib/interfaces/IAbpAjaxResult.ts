export default interface IAbpAjaxResult {
  error: Object;
  result: Object;
  success: boolean;
  targetUrl: string;
  unAuthorizedRequest: boolean;
  __abp: boolean;
}
