<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <p class="text-md-center" v-if="isMultiTenancyEnabled">
        <TenantSwitch/>
      </p>
      <v-form v-model="isFormValid">
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
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" :disabled="!isFormValid || isFormSubmitting" @click="handleLogin">Login</v-btn>
    </v-card-actions>
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
      (v: string) => v.length >= 6 || "Password must be at least 8 characters"
    ];
  }

  get tenantName() {
    return SessionModule.tenantSwitchName;
  }

  get isMultiTenancyEnabled() {
    return SessionModule.isMultiTenancyEnabled;
  }

  handleLogin() {
    if (this.isFormValid) {
      this.isFormSubmitting = true;

      SessionModule.Login({ username: this.username, password: this.password })
        .then(response => {
          this.$router.replace({
            name: "Home"
          });
        })
        .catch(error => {
          this.isFormSubmitting = false;
          this.isFormValid = false;
          this.password = "";
          var snackbarMessage = new SnackbarMessage(
            SnackbarType.Error,
            error.message
          );
          SnackbarModule.SHOW_SNACKBAR(snackbarMessage);
        });
    }
  }
}
</script>