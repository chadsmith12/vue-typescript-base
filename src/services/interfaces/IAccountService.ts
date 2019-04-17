import { IUserLoginResult } from "@/core/dtos/Account/IUserLoginResult";
import IsTenantAvailableOutput from "@/core/dtos/Account/IsTenantAvailableOutput";

export default interface ISessionService {
  login(username: string, password: string): Promise<IUserLoginResult>;

  isTenantAvailable(tenantName: string): Promise<IsTenantAvailableOutput>;
}
