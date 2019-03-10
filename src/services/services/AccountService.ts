import IAccountService from "@/services/interfaces/IAccountService";
import { IUserLoginResult } from "@/core/interfaces/IUserLoginResult";
import IsTenantAvailableOutput from "@/core/entities/IsTenantAvailableOutput";
import ajax from "@/lib/ajax";
import IAbpAjaxResult from "@/core/interfaces/IAbpAjaxResult";
import { AxiosResponse } from "axios";

class AccountService implements IAccountService {
  async isTenantAvailable(tenantName: string): Promise<IsTenantAvailableOutput> {
    // tslint:disable-next-line:typedef
    const postData = {
      tenancyName: tenantName
    };
    const response: AxiosResponse = await ajax.post(
      "/api/services/app/Account/IsTenantAvailable",
      postData
    );
    const tenantAvailableOutput: IAbpAjaxResult<IsTenantAvailableOutput> = response.data;

    return tenantAvailableOutput.result;
  }

  async login(username: string, password: string): Promise<IUserLoginResult> {
    // tslint:disable-next-line:typedef
    let postData = {
      userNameOrEmailAddress: username,
      password: password,
      rememberClient: true
    };
    const response: AxiosResponse = await ajax.post("/api/TokenAuth/Authenticate", postData);
    const loginData: IAbpAjaxResult<IUserLoginResult> = response.data;

    return loginData.result;
  }
}

const accountService: AccountService = new AccountService();
export default accountService;
