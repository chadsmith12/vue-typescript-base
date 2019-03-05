import { IUserLoginResult } from "@/lib/interfaces/IUserLoginResult";

export default interface ISessionService {
  login(username: string, password: string): Promise<IUserLoginResult>;
}
