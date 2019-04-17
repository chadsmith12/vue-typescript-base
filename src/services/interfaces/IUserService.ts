import PagedResultDto from "@/core/dtos/ResultDtos/PagedResultDto";
import UserDto from "@/core/dtos/User/UserDto";
import CreateUserDto from "@/core/dtos/User/CreateUserDto";
import ListResultDto from "@/core/dtos/ResultDtos/ListResultDto";
import RoleDto from "@/core/dtos/Roles/RoleDto";

export default interface IUserService {
  getAllUsers(): Promise<PagedResultDto<UserDto>>;

  createUser(user: CreateUserDto): Promise<UserDto>;

  updateUser(user: UserDto): Promise<UserDto>;

  getRoles(): Promise<ListResultDto<RoleDto>>;

  deleteUser(userId: number): Promise<any>;
}
