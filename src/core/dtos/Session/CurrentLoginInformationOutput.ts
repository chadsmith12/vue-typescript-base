import { ApplicationInfoDto } from "@/core/dtos/Session/ApplicationInfoDto";
import { UserLoginInfoDto } from "@/core/dtos/Session/UserLoginInfoDto";
import { TenantLoginInfoDto } from "@/core/dtos/Session/TenantLoginInfoDto";

export class CurrentLoginInformationOutput {
  application: ApplicationInfoDto = new ApplicationInfoDto();
  user: UserLoginInfoDto = new UserLoginInfoDto();
  tenant: TenantLoginInfoDto = new TenantLoginInfoDto();
}
