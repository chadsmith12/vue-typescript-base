<template>
  <v-dialog width="500" v-model="tenantModel.showTenantSwitch">
    <template v-slot:activator="{on}">
      <v-btn small color="indigo" v-on="on">Current Tenant: {{ tenantModel.tenantName }}</v-btn>
    </template>
    <v-card>
      <v-card-title class="headline lighten-2" primary-title>Switch Tenant</v-card-title>
      <v-card-text>
        <v-text-field
          v-model="tenantModel.changedTenant"
          label="Tenancy Name..."
          type="text"
          name="tenancyname"
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="onTenantSwitch">Switch Tenants</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SessionModule } from "@/store/modules/session";
import { AccountModule } from "@/store/modules/account";
import { SnackbarModule } from "@/store/modules/snackbar";
import TenantSwitchModel from "@/models/multitenancy/TenantSwitchModel";
import util from "@/lib/util";
import SnackbarMessage from "@/core/user-interface-models/Snackbar";
import { SnackbarType } from "@/core/user-interface-models/ISnackbar";

@Component({})
export default class TenantSwitch extends Vue {
  tenantModel: TenantSwitchModel = new TenantSwitchModel();

  async onTenantSwitch() {
    if (!this.tenantModel.changedTenant) {
      abp.multiTenancy.setTenantIdCookie(undefined);
      location.reload();
    } else {
      const foundTenant = await AccountModule.IsTenantAvailableOutput(
        this.tenantModel.changedTenant
      );

      switch (foundTenant.state) {
        case 1:
          abp.multiTenancy.setTenantIdCookie(foundTenant.tenantId);
          this.tenantModel.showTenantSwitch = false;
          location.reload();
          return;
        case 2:
          SnackbarModule.SHOW_SNACKBAR(
            new SnackbarMessage(
              SnackbarType.Error,
              "The tenant you selected is not active"
            )
          );
          break;
        case 3:
          SnackbarModule.SHOW_SNACKBAR(
            new SnackbarMessage(
              SnackbarType.Error,
              "Could not find tenant with the name " +
                this.tenantModel.changedTenant
            )
          );
          break;
      }
    }
  }
}
</script>