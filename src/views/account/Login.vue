<template>
  <v-card class="elevation-12">
    <v-form v-model="isFormValid">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <p class="text-md-center" v-if="isMultiTenancyEnabled">
          <TenantSwitch/>
        </p>

        <v-text-field
          prepend-icon="person"
          name="login"
          label="Login"
          type="text"
          v-model="username"
          :rules="userNameRules"
        ></v-text-field>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="password"
          :rules="passwordRules"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          type="submit"
          color="primary"
          :disabled="!isFormValid || isFormSubmitting"
          @click="handleLogin"
        >Login</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SessionModule } from "@/store/modules/session";
import { SnackbarModule } from "@/store/modules/snackbar";
import SnackbarMessage from "@/core/user-interface-models/Snackbar";
import { SnackbarType } from "@/core/user-interface-models/ISnackbar";
import TenantSwitch from "@/views/account/TenantSwitch.vue";

@Component({
  components: {
    TenantSwitch
  }
})
export default class Login extends Vue {
  isFormValid: boolean = false;
  isFormSubmitting: boolean = false;
  username: string = "";
  password: string = "";
  showTenantSwitch: boolean = false;

  get userNameRules() {
    return [(v: string) => !!v || "Username is required..."];
  }

  get passwordRules() {
    return [
      (v: string) => !!v || "Please enter a password...",
      (v: string) => v.length >= 6 || "Password must be at least 6 characters"
    ];
  }

  get tenantName() {
    return SessionModule.tenantSwitchName;
  }

  get isMultiTenancyEnabled() {
    return abp.multiTenancy.isEnabled;
  }

  async handleLogin() {
    if (this.isFormValid) {
      this.isFormSubmitting = true;

      try {
        await SessionModule.Login({
          username: this.username,
          password: this.password
        });
        this.$router.replace({
          name: "Home"
        });
        await SessionModule.InitSession();
      } catch (error) {
        this.isFormSubmitting = false;
        this.isFormValid = false;
        this.password = "";
      }
    }
  }
}
</script>