import IUserConfigurationService from "../interfaces/IUserConfigurationService";
import ajax from "../../lib/ajax";
import IAbpAjaxResult from "@/lib/interfaces/IAbpAjaxResult";
import { AxiosResponse } from "axios";

class UserConfigurationService implements IUserConfigurationService {
  async getUserConfiguration(): Promise<any> {
    var response: AxiosResponse = await ajax.get("/AbpUserConfiguration/GetAll");
    var data: IAbpAjaxResult<any> = response.data;

    return data;
  }
}

export default UserConfigurationService;
