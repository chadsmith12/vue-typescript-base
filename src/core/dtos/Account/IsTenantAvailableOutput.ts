export enum TenantAvailabilityState {
  Available = 1,
  InActive,
  NotFound
}

export default class IsTenantAvailableOutput {
  state: TenantAvailabilityState = TenantAvailabilityState.Available;
  tenantId: number = 0;
}
