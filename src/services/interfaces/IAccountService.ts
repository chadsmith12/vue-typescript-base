import { IUserLoginResult } from "@/core/interfaces/IUserLoginResult";

export default interface ISessionService {
  login(username: string, password: string): Promise<IUserLoginResult>;
}
