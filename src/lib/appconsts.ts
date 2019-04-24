import { IAppConsts } from "@/core/const-models/IAppConsts";

/**
 * The application consts that will be used across the application
 */
const AppConsts: IAppConsts = {
  userManagment: {
    defaultAdminUserName: "admin"
  },
  authorization: {
    encryptedAuthTokenName: "enc_auth_token",
    googleAuth: {
      clientId: "1089817839359-fmqnahge1ucgjcbnrl1au8pbjhhq1prt.apps.googleusercontent.com",
      scope: "profile email",
      prompt: "select_account"
    }
  },
  appBaseUrl: "https://localhost:44338/",
  remoteServiceBaseUrl: "http://localhost:21021/",
  localizationCookieName: "Localization.CultureName",
  appName: "App Name",
  mobileBreakPoint: 991
};

export default { AppConsts };
