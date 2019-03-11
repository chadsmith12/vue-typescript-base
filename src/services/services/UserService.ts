import IUserService from "../interfaces/IUserService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";
import ajax from "@/lib/ajax";
import { AxiosResponse } from "axios";
import IAbpAjaxResult from "@/core/interfaces/IAbpAjaxResult";

class UserService implements IUserService {
  async getAllUsers(): Promise<PagedResultDto<UserDto>> {
    const response: AxiosResponse = await ajax.get("/api/services/app/User/GetAll");
    const users: IAbpAjaxResult<PagedResultDto<UserDto>> = response.data;

    return users.result;
  }
}

const userService: UserService = new UserService();
export default userService;
