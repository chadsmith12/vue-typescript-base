import IUserService from "../interfaces/IUserService";
import PagedResultDto from "@/core/dtos/ResultDtos/PagedResultDto";
import UserDto from "@/core/dtos/User/UserDto";
import ajax from "@/lib/ajax";
import { AxiosResponse } from "axios";
import IAbpAjaxResult from "@/core/dtos/ResultDtos/IAbpAjaxResult";
import CreateUserDto from "@/core/dtos/User/CreateUserDto";
import ListResultDto from "@/core/dtos/ResultDtos/ListResultDto";
import RoleDto from "@/core/dtos/Roles/RoleDto";

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

  async deleteUser(userId: number): Promise<any> {
    const url: string = "/api/services/app/User/Delete?id=" + userId;
    await ajax.delete(url);

    return;
  }
}

const userService: UserService = new UserService();
export default userService;
