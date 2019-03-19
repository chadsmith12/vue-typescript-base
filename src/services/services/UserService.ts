import IUserService from "../interfaces/IUserService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";
import ajax from "@/lib/ajax";
import { AxiosResponse } from "axios";
import IAbpAjaxResult from "@/core/interfaces/IAbpAjaxResult";
import CreateUserDto from "@/core/entities/User/CreateUserDto";
import ListResultDto from "@/core/entities/ListResultDto";
import RoleDto from "@/core/entities/Roles/RoleDto";

class UserService implements IUserService {
  async getAllUsers(): Promise<PagedResultDto<UserDto>> {
    const response: AxiosResponse = await ajax.get("/api/services/app/User/GetAll");
    const users: IAbpAjaxResult<PagedResultDto<UserDto>> = response.data;

    return users.result;
  }

  async createUser(user: CreateUserDto): Promise<UserDto> {
    const response: AxiosResponse = await ajax.post("/api/services/app/User/Create", user);
    const updatedUser: IAbpAjaxResult<UserDto> = response.data;

    return updatedUser.result;
  }

  async updateUser(user: UserDto): Promise<UserDto> {
    const response: AxiosResponse = await ajax.put("/api/services/app/User/Update", user);
    const updatedUser: IAbpAjaxResult<UserDto> = response.data;

    return updatedUser.result;
  }

  async getRoles(): Promise<ListResultDto<RoleDto>> {
    const response: AxiosResponse = await ajax.get("/api/services/app/User/GetRoles");
    const roles: IAbpAjaxResult<ListResultDto<RoleDto>> = response.data;

    return roles.result;
  }
}

const userService: UserService = new UserService();
export default userService;
