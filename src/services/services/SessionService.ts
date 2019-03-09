import ISessionService from "@/services/interfaces/ISessionService";
import { ILoginInformation } from "@/core/interfaces/ISession";
import ajax from "@/lib/ajax";
import IAbpAjaxResult from "@/core/interfaces/IAbpAjaxResult";
import { AxiosResponse } from "axios";

class SessionService implements ISessionService {
  async getLoginInformation(): Promise<ILoginInformation> {
    const response: AxiosResponse = await ajax.get(
      "/api/services/app/Session/GetCurrentLoginInformations"
    );
    const data: IAbpAjaxResult<ILoginInformation> = response.data;
    const loginInformation: ILoginInformation = data.result;

    return loginInformation;
  }
}

const sessionService: SessionService = new SessionService();
export default sessionService;
