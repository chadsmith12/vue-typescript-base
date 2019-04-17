import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";
import userService from "@/services/services/UserService";
import PagedResultDto from "@/core/dtos/ResultDtos/PagedResultDto";
import UserDto from "@/core/dtos/User/UserDto";
import CreateUserDto from "@/core/dtos/User/CreateUserDto";
import UserModalViewModel from "@/models/users/UserModalViewModel";
import RoleDto from "@/core/dtos/Roles/RoleDto";
import ListResultDto from "@/core/dtos/ResultDtos/ListResultDto";
import util from "@/lib/util";

@Module({ dynamic: true, store, name: "users" })
class UserState extends VuexModule {
  isLoadingUsers: boolean = true;
  editedUser: UserModalViewModel = new UserModalViewModel([]);
  formTitle: string = "";
  roles: Array<RoleDto> = [];

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
  createUser(user: UserModalViewModel): Promise<UserDto> {
    let createdUser: CreateUserDto = new CreateUserDto();
    createdUser.userName = user.user.userName;
    createdUser.emailAddress = user.user.emailAddress;
    createdUser.isActive = user.user.isActive;
    createdUser.name = user.user.name;
    createdUser.surname = user.user.surname;
    createdUser.password = user.password;
    createdUser.roleNames = user.user.roleNames;
    return userService.createUser(createdUser);
  }

  @Action
  updateUser(user: UserModalViewModel): Promise<UserDto> {
    return userService.updateUser(user.user);
  }

  @Action({ commit: "SET_ROLES" })
  async getRoles(): Promise<RoleDto[]> {
    const response: ListResultDto<RoleDto> = await userService.getRoles();

    return response.items;
  }

  @Action
  deleteUser(userId: number): Promise<any> {
    return userService.deleteUser(userId);
  }

  @Mutation
  SET_LOADING_USERS(isLoading: boolean): void {
    this.isLoadingUsers = isLoading;
  }

  @Mutation
  SET_EDITED_USER(user: UserDto): void {
    const editingUser: UserDto = util.extend(true, {}, user);
    this.editedUser = new UserModalViewModel(this.roles, editingUser);
    this.formTitle = "Edit User";
  }

  @Mutation
  SET_CREATE_USER(): void {
    this.editedUser = new UserModalViewModel(this.roles);
    this.formTitle = "Create User";
  }

  @Mutation
  SET_ROLES(roles: Array<RoleDto>): void {
    this.roles = roles;
  }
}

export const UserModule: UserState = getModule(UserState);
