import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";
import CreateUserDto from "@/core/entities/User/CreateUserDto";

export default interface IUserService {
  getAllUsers(): Promise<PagedResultDto<UserDto>>;

  createUser(user: CreateUserDto): Promise<UserDto>;

  updateUser(user: UserDto): Promise<UserDto>;
}
