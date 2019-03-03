import { IUser } from "@/lib/interfaces/ISession";

export default class User implements IUser {
  name: string = "";
  surname: string = "";
  userName: string = "";
  emailAddress: string = "";
  id: number = 0;
}
