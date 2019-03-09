import store from "@/store/store";
import sessionService from "@/services/services/SessionService";
import LoginInformation from "@/core/entities/LoginInformation";
import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import { ILoginInformation } from "@/core/interfaces/ISession";
import User from "@/core/entities/User";
import accountService from "@/services/services/AccountService";
import { IUserLoginResult } from "@/core/interfaces/IUserLoginResult";

@Module({ dynamic: true, store, name: "session" })
export default class Session extends VuexModule {
  public session = new LoginInformation();
  public token: string = "";

  @Action({ commit: "INIT_SESSION" })
  // tslint:disable-next-line:typedef
  public async InitSession() {
    const currentSession: ILoginInformation = await sessionService.getLoginInformation();
    return currentSession;
  }

  @Action({ commit: "DESTROY_SESSION" })
  // tslint:disable-next-line:typedef
  public DestroySession() {
    localStorage.clear();
    sessionStorage.clear();
    abp.auth.clearToken();
  }

  @Action
  @Action({ commit: "SET_TOKEN" })
  public async Login(userInfo: { username: string; password: string }): Promise<IUserLoginResult> {
    const username: string = userInfo.username.trim();
    const loginResult: IUserLoginResult = await accountService.login(username, userInfo.password);
    const expirationTimes: Date = new Date(
      new Date().getTime() + 1000 * loginResult.expireInSeconds
    );

    abp.auth.setToken(loginResult.accessToken, expirationTimes);

    return loginResult;
  }

  @Mutation
  // tslint:disable-next-line:typedef
  private INIT_SESSION(session: ILoginInformation) {
    this.session = session;
  }

  @Mutation
  public DESTROY_SESSION(): void {
    this.session.user = new User();
  }

  @Mutation
  private SET_TOKEN(userLoginInfo: IUserLoginResult): void {
    this.token = userLoginInfo.encryptedAccessToken;
    this.session.user.id = userLoginInfo.userId;
  }

  /**
   * Gets the the version of the application
   */
  get applicationVersion(): string {
    return this.session.application.version;
  }
}

export const SessionModule: Session = getModule(Session);
