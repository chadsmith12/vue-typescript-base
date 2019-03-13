import IPermissionDependency from "./IPermissionDependency";

/**
 * Checks to see that the current user has all the permissions passed in.
 */
export default class SimplePermissionChecker implements IPermissionDependency {
  permissions: Array<string>;
  constructor(requiredPermissions: Array<string>) {
    this.permissions = requiredPermissions;
  }
  isAuthenticated(): boolean {
    return abp.auth.areAllGranted(...this.permissions);
  }
}
