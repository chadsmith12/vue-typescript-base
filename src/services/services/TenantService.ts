import ITenantInterface from "../interfaces/ITenantService";
import PagedResultDto from "@/core/dtos/ResultDtos/PagedResultDto";
import TenantDto from "@/core/dtos/Tenants/TenantDto";
import { AxiosResponse } from "axios";
import ajax from "@/lib/ajax";
import IAbpAjaxResult from "@/core/dtos/ResultDtos/IAbpAjaxResult";

class TenatService implements ITenantInterface {
  async getAllTenants(): Promise<PagedResultDto<TenantDto>> {
    const response: AxiosResponse = await ajax.get("/api/services/app/Tenant/GetAll");
    const tenants: IAbpAjaxResult<PagedResultDto<TenantDto>> = response.data;

    return tenants.result;
  }
}
