import { CurrentLoginInformationOutput } from "@/core/dtos/Session/CurrentLoginInformationOutput";

export default interface ISessionService {
  getLoginInformation(): Promise<CurrentLoginInformationOutput>;
}
