import ITenantInterface from "../interfaces/ITenantService";
import PagedResultDto from "@/core/entities/pagination/PagedResultDto";
import TenantDto from "@/core/entities/Tenants/TenantDto";
import { AxiosResponse } from "axios";
import ajax from "@/lib/ajax";
import IAbpAjaxResult from "@/core/interfaces/IAbpAjaxResult";

class TenatService implements ITenantInterface {
  async getAllTenants(): Promise<PagedResultDto<TenantDto>> {
    const response: AxiosResponse = await ajax.get("/api/services/app/Tenant/GetAll");
    const tenants: IAbpAjaxResult<PagedResultDto<TenantDto>> = response.data;

    return tenants.result;
  }
}
