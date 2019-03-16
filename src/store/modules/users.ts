import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";
import userService from "@/services/services/UserService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";
import CreateUserDto from "@/core/entities/User/CreateUserDto";

@Module({ dynamic: true, store, name: "users" })
class UserState extends VuexModule {
  isLoadingUsers: boolean = true;
  editedUser: UserDto = new UserDto();
  createdUser: CreateUserDto = new CreateUserDto();
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
  createUser(user: CreateUserDto): Promise<UserDto> {
    return userService.createUser(user);
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

  @Mutation
  SET_CREATE_USER(): void {
    this.formTitle = "Create User";
  }
}

export const UserModule: UserState = getModule(UserState);
