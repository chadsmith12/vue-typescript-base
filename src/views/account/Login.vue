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
        <v-btn
          type="button"
          color="primary"
          @click="handleAuthClick"
          :disabled="!isGAuthInit"
        >Auth Code</v-btn>
        <v-btn
          type="button"
          color="primary"
          @click="handleGoogleLogin"
          :disabled="!isGAuthInit"
        >Sign In With Google</v-btn>
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
import ajax from "../../lib/ajax";

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
  isGAuthInit: boolean = false;
  isGAuthSignedIn: boolean = false;

  async handleAuthClick() {
    const code = await this.$gAuth.getAuthCode();
    console.log(code);
  }

  async handleGoogleLogin() {
    const user = await this.$gAuth.signIn();
    const authResponse = user.getAuthResponse();
    console.log(authResponse);
    const data = {
      authProvider: "Google",
      providerKey: "Google",
      providerAccessCode: authResponse.id_token
    };
    const response = await ajax.post(
      "/api/TokenAuth/ExternalAuthenticate",
      data
    );
    console.log(response);
    console.log(authResponse.id_token);
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

  mounted() {
    // atteempt to make sure we initailized. keep checking until we know we are
    let checkGAuth = setInterval(() => {
      this.isGAuthInit = this.$gAuth.isInit;
      this.isGAuthSignedIn = this.$gAuth.isAuthorized;

      if (this.isGAuthInit) clearInterval(checkGAuth);
    }, 1000);
  }
}
</script>