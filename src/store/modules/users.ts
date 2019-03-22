import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";
import userService from "@/services/services/UserService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";
import CreateUserDto from "@/core/entities/User/CreateUserDto";
import UserModalViewModel from "@/models/users/UserModalViewModel";
import RoleDto from "@/core/entities/Roles/RoleDto";
import ListResultDto from "@/core/entities/ListResultDto";

@Module({ dynamic: true, store, name: "users" })
class UserState extends VuexModule {
  isLoadingUsers: boolean = true;
  editedUser: UserModalViewModel = new UserModalViewModel();
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
    const createdUser: CreateUserDto = new CreateUserDto();
    createdUser.userName = user.userName;
    createdUser.emailAddress = user.emailAddress;
    createdUser.isActive = user.isActive;
    createdUser.name = user.firstName;
    createdUser.surname = user.lastName;
    createdUser.password = user.password;
    createdUser.roleNames = user.userRoles;
    return userService.createUser(createdUser);
  }

  @Action
  updateUser(user: UserModalViewModel): Promise<UserDto> {
    const updatedUser: UserDto = new UserDto();
    updatedUser.id = user.id;
    updatedUser.userName = user.userName;
    updatedUser.name = user.firstName;
    updatedUser.surname = user.lastName;
    updatedUser.emailAddress = user.emailAddress;
    updatedUser.isActive = user.isActive;
    updatedUser.roleNames = user.userRoles;

    return userService.updateUser(updatedUser);
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
    this.editedUser.setUser(user, this.roles);
    this.formTitle = "Edit User";
  }

  @Mutation
  SET_CREATE_USER(): void {
    this.editedUser = new UserModalViewModel();
    this.formTitle = "Create User";
  }

  @Mutation
  SET_ROLES(roles: Array<RoleDto>): void {
    this.roles = roles;
  }
}

export const UserModule: UserState = getModule(UserState);
