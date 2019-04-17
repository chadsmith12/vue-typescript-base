import PagedResultDto from "@/core/dtos/ResultDtos/PagedResultDto";
import TenantDto from "@/core/dtos/Tenants/TenantDto";

export default interface ITenantInterface {
  getAllTenants(): Promise<PagedResultDto<TenantDto>>;
}
