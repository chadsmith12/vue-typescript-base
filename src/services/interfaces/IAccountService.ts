import { IUserLoginResult } from "@/core/interfaces/IUserLoginResult";
import IsTenantAvailableOutput from "@/core/entities/IsTenantAvailableOutput";

export default interface ISessionService {
  login(username: string, password: string): Promise<IUserLoginResult>;

  isTenantAvailable(tenantName: string): Promise<IsTenantAvailableOutput>;
}
