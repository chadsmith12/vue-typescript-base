import { IApplication, IUser, ITenant, ILoginInformation } from "@/core/interfaces/ISession";
import Application from "@/core/entities/Application";
import User from "@/core/entities/User";
import Tenant from "@/core/entities/Tenant";

export default class LoginInformation implements ILoginInformation {
  application: IApplication = new Application();
  user: IUser = new User();
  tenant: ITenant = new Tenant();
}
