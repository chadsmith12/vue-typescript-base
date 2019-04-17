import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import TenantDto from "@/core/entities/Tenants/TenantDto";

export default interface ITenantInterface {
  getAllTenants(): Promise<PagedResultDto<TenantDto>>;
}
