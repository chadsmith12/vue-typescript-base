import IAccountService from "@/services/interfaces/IAccountService";
import { IUserLoginResult } from "@/lib/interfaces/IUserLoginResult";
import ajax from "@/lib/ajax";
import IAbpAjaxResult from "@/lib/interfaces/IAbpAjaxResult";
import { AxiosResponse } from "axios";

class AccountService implements IAccountService {
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
