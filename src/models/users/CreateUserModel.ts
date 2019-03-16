import CreateUserDto from "@/core/entities/User/CreateUserDto";

export default class CreateUserModal {
  createUser: CreateUserDto = new CreateUserDto();
  confirmPassword: string = "";

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
    return [(v: string) => v === this.createUser.password || "Passwords do not match..."];
  }

  resetModel(): void {
    this.createUser = new CreateUserDto();
    this.confirmPassword = "";
  }
}
