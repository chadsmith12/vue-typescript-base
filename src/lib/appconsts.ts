import { IAppConsts } from "./interfaces/IAppConsts";

/**
 * The application consts that will be used across the application
 */
const AppConsts: IAppConsts = {
  userManagment: {
    defaultAdminUserName: "admin"
  },
  authorization: {
    encryptedAuthTokenName: "enc_auth_token"
  },
  appBaseUrl: "http://localhost:8082",
  remoteServiceBaseUrl: "http://localhost:21021/",
  localizationCookieName: "Localization.CultureName"
};

export default { AppConsts };
