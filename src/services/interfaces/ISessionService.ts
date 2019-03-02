import { ILoginInformation } from "@/lib/interfaces/ISession";

export default interface ISessionService {
  getLoginInformation(): Promise<ILoginInformation>;
}
