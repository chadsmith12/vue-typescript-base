export default class UserDto {
  userName: string = "";
  name: string = "";
  surName: string = "";
  emailAddress: string = "";
  isActive: boolean = false;
  lastLoginTime?: Date;
  creationTime: Date = new Date();
  roleNames: Array<string> = new Array<string>();

  get fullName(): string {
    return `${name} ${this.surName}`;
  }
}
