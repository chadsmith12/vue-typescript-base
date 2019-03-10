import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";
import IsTenantAvailableOutput from "@/core/entities/IsTenantAvailableOutput";
import accountService from "@/services/services/AccountService";

@Module({ dynamic: true, store, name: "account" })
class AccountState extends VuexModule {
  @Action
  async IsTenantAvailableOutput(tenancyName: string): Promise<IsTenantAvailableOutput> {
    return await accountService.isTenantAvailable(tenancyName);
  }
}

export const AccountModule: AccountState = getModule(AccountState);
