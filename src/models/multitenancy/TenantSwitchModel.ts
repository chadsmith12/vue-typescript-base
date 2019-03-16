import { SessionModule } from "@/store/modules/session";

export default class TenantSwitchModel {
  showTenantSwitch: boolean = false;
  changedTenant: string = SessionModule.tenantName;

  get tenantName(): string {
    return SessionModule.tenantSwitchName;
  }
}
