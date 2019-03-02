import { IUserManagment } from "./IUserManagment";
import { IAuthorization } from "./IAuthorization";

export interface IAppConsts {
  userManagment: IUserManagment;
  authorization: IAuthorization;
  appBaseUrl: string;
  remoteServiceBaseUrl: string;
  localizationCookieName: string;
}
