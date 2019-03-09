import { IUserManagment } from "./IUserManagment";
import { IAuthorization } from "./IAuthorization";

export interface IAppConsts {
  /**
   * The applications user managment consts.
   */
  userManagment: IUserManagment;
  /**
   * the application authroization consts.
   */
  authorization: IAuthorization;
  /**
   * The applications base url.
   */
  appBaseUrl: string;
  /**
   * The applications remote api service base url.
   */
  remoteServiceBaseUrl: string;
  /**
   * The name of the cookie to use for localization.
   */
  localizationCookieName: string;
}
