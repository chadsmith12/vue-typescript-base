import { IApplication, IUser, ITenant, ILoginInformation } from "@/lib/interfaces/ISession";
import Application from "@/lib/entities/Application";
import User from "@/lib/entities/User";
import Tenant from "@/lib/entities/Tenant";

export default class SessionState implements ILoginInformation {
  application: IApplication = new Application();
  user: IUser = new User();
  tenant: ITenant = new Tenant();
}
