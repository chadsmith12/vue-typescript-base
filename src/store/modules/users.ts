import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";
import userService from "@/services/services/UserService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";

@Module({ dynamic: true, store, name: "users" })
class UserState extends VuexModule {
  @Action
  async getAllUsers(): Promise<Array<UserDto>> {
    const users: PagedResultDto<UserDto> = await userService.getAllUsers();

    return users.items;
  }
}

export const UserModule: UserState = getModule(UserState);
