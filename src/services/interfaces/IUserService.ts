import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import UserDto from "@/core/entities/User/UserDto";

export default interface IUserService {
  getAllUsers(): Promise<PagedResultDto<UserDto>>;

  updateUser(user: UserDto): Promise<UserDto>;
}
