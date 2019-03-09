import { ITenant } from "@/core/interfaces/ISession";

export default class Tenant implements ITenant {
  tenancyName: string = "";
  name: string = "";
  id: number = 0;
}
