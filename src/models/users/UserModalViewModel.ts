import UserDto from "@/core/entities/User/UserDto";
import RoleDto from "@/core/entities/Roles/RoleDto";

export default class UserModalViewModel {
  id: number = 0;
  userName: string = "";
  emailAddress: string = "";
  firstName: string = "";
  lastName: string = "";
  isActive: boolean = true;
  password: string = "";
  confirmPassword: string = "";
  userRoles: Array<string> = [];

  roles: Array<RoleDto> = [];

  // tslint:disable-next-line:typedef
  get userNameRules() {
    return [(v: string) => !!v || "Username is required..."];
  }

  // tslint:disable-next-line:typedef
  get passwordRules() {
    return [
      (v: string) => !!v || "Please enter a password...",
      (v: string) => v.length >= 8 || "Password must be at least 8 characters..."
    ];
  }

  // tslint:disable-next-line:typedef
  get confirmPasswordRules() {
    return [(v: string) => v === this.password || "Passwords do not match..."];
  }

  resetModel(): void {
    this.id = 0;
    this.userName = "";
    this.emailAddress = "";
    this.firstName = "";
    this.lastName = "";
    this.isActive = true;
    this.password = "";
    this.confirmPassword = "";
    this.roles = [];
  }

  setUser(user: UserDto, roles: Array<RoleDto>): void {
    this.id = user.id;
    this.userName = user.userName;
    this.emailAddress = user.emailAddress;
    this.firstName = user.name;
    this.lastName = user.surName;
    this.isActive = user.isActive;
    this.userRoles = user.roleNames;
    this.roles = roles;
  }
}
