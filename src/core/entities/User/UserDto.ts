export default class UserDto {
  id: number = 0;
  userName: string = "";
  name: string = "";
  surname: string = "";
  emailAddress: string = "";
  isActive: boolean = false;
  lastLoginTime?: Date;
  creationTime: Date = new Date();
  roleNames: Array<string> = new Array<string>();

  get fullName(): string {
    return `${name} ${this.surname}`;
  }
}
