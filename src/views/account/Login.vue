<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
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

@Component({})
export default class Login extends Vue {
  isFormValid: boolean = false;
  isFormSubmitting: boolean = false;
  username: string = "";
  password: string = "";

  get userNameRules() {
    return [(v: string) => !!v || "Username is required..."];
  }

  get passwordRules() {
    return [
      (v: string) => !!v || "Please enter a password...",
      (v: string) => v.length >= 6 || "Password must be at least 8 characters"
    ];
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
          var snackbarMessage = new SnackbarMessage();
          snackbarMessage.snackBarType = SnackbarType.Error;
          snackbarMessage.message = error.message;
          SnackbarModule.SHOW_SNACKBAR(snackbarMessage);
        });
    }
  }
}
</script>