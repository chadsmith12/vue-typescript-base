import store from "@/store/store";
import sessionService from "@/services/services/SessionService";
import SessionState from "@/core/entities/SessionState";
import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import { ILoginInformation } from "@/core/interfaces/ISession";

@Module({ dynamic: true, store, name: "session" })
export default class Session extends VuexModule {
  public session = new SessionState();

  @Action({ commit: "INIT_SESSION" })
  // tslint:disable-next-line:typedef
  public async InitSession() {
    const currentSession: ILoginInformation = await sessionService.getLoginInformation();
    return currentSession;
  }

  @Mutation
  // tslint:disable-next-line:typedef
  private INIT_SESSION(session: ILoginInformation) {
    console.log("Inside INIT_SESSION: ", session);
    this.session = session;
  }
}

export const SessionModule: Session = getModule(Session);
