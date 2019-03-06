import { ILoginInformation } from "@/core/interfaces/ISession";

export default interface ISessionService {
  getLoginInformation(): Promise<ILoginInformation>;
}
