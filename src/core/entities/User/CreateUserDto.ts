export default class CreateUserDto {
  userName: string = "";
  name: string = "";
  surname: string = "";
  emailAddress: string = "";
  isActive: boolean = true;
  roleNames: Array<string> = [];
  password: string = "";
}
