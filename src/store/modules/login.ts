import {
  VuexModule,
  Module,
  MutationAction,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store/store";
import Util from "@/lib/util";
import AppConsts from "@/lib/appconsts";
import accountService from "@/services/services/AccountService";
import { IUserLoginResult } from "@/lib/interfaces/IUserLoginResult";

export interface IUserState {
  token: string;
  userId: number;
}

@Module({ dynamic: true, store, name: "user" })
class UserState extends VuexModule implements IUserState {
  token: string = "";
  userId: number = 0;

  @Action({ commit: "SET_TOKEN" })
  public async Login(userInfo: { username: string; password: string }): Promise<IUserLoginResult> {
    const username: string = userInfo.username.trim();
    const loginResult: IUserLoginResult = await accountService.login(username, userInfo.password);
    Util.abp.auth.setToken(
      loginResult.accessToken,
      new Date(new Date().getTime() + 1000 * loginResult.expireInSeconds)
    );

    return loginResult;
  }

  @Mutation
  private SET_TOKEN(userLoginInfo: IUserLoginResult): void {
    this.token = userLoginInfo.encryptedAccessToken;
    this.userId = userLoginInfo.userId;
  }
}

export const UserModule: UserState = getModule(UserState);
