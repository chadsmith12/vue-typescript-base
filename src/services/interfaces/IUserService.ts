import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";
import CreateUserDto from "@/core/entities/User/CreateUserDto";
import ListResultDto from "@/core/entities/ListResultDto";
import RoleDto from "@/core/entities/Roles/RoleDto";

export default interface IUserService {
  getAllUsers(): Promise<PagedResultDto<UserDto>>;

  createUser(user: CreateUserDto): Promise<UserDto>;

  updateUser(user: UserDto): Promise<UserDto>;

  getRoles(): Promise<ListResultDto<RoleDto>>;

  deleteUser(userId: number): Promise<any>;
}
