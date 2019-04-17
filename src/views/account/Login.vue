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
          v-model="loginModel.username"
          :rules="loginModel.userNameRules"
        ></v-text-field>
        <v-text-field
          id="password"
          prepend-icon="lock"
          name="password"
          label="Password"
          type="password"
          v-model="loginModel.password"
          :rules="loginModel.passwordRules"
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
import LoginModel from "@/models/login/LoginModel";

@Component({
  components: {
    TenantSwitch
  }
})
export default class Login extends Vue {
  loginModel: LoginModel = new LoginModel();
  isFormValid: boolean = false;
  isFormSubmitting: boolean = false;
  showTenantSwitch: boolean = false;

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
          username: this.loginModel.username,
          password: this.loginModel.password
        });
        this.$router.replace({
          name: "Home"
        });
        await SessionModule.InitSession();
      } catch (error) {
        this.isFormSubmitting = false;
        this.isFormValid = false;
        this.loginModel.password = "";
      }
    }
  }
}
</script>