import ISessionService from "@/services/interfaces/ISessionService";
import { CurrentLoginInformationOutput } from "@/core/dtos/Session/CurrentLoginInformationOutput";
import ajax from "@/lib/ajax";
import IAbpAjaxResult from "@/core/dtos/ResultDtos/IAbpAjaxResult";
import { AxiosResponse } from "axios";

class SessionService implements ISessionService {
  async getLoginInformation(): Promise<CurrentLoginInformationOutput> {
    const response: AxiosResponse = await ajax.get(
      "/api/services/app/Session/GetCurrentLoginInformations",
      {
        headers: {
          "Abp.TenantId": abp.multiTenancy.getTenantIdCookie()
        }
      }
    );
    const data: IAbpAjaxResult<CurrentLoginInformationOutput> = response.data;
    const loginInformation: CurrentLoginInformationOutput = data.result;

    return loginInformation;
  }
}

const sessionService: SessionService = new SessionService();
export default sessionService;
