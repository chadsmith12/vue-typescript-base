import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";
import userService from "@/services/services/UserService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";

@Module({ dynamic: true, store, name: "users" })
class UserState extends VuexModule {
  isLoadingUsers: boolean = true;
  editedUser: UserDto = new UserDto();
  formTitle: string = "";

  @Action
  async getAllUsers(): Promise<Array<UserDto>> {
    const users: PagedResultDto<UserDto> = await userService.getAllUsers();

    return users.items;
  }

  @Action({ commit: "SET_EDITED_USER" })
  getUser(user: UserDto): UserDto {
    return user;
  }

  @Action
  updateUser(user: UserDto): Promise<UserDto> {
    return userService.updateUser(user);
  }

  @Mutation
  SET_LOADING_USERS(isLoading: boolean): void {
    this.isLoadingUsers = isLoading;
  }

  @Mutation
  SET_EDITED_USER(user: UserDto): void {
    this.editedUser = user;
    this.formTitle = "Edit User";
  }
}

export const UserModule: UserState = getModule(UserState);
