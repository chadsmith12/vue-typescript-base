<template>
  <div>
    <form>
      <input type="text" placeholder="Username..." v-model="userName">
      <input type="password" placeholder="Password..." v-model="password">
      <button type="button" @click="handleLogin">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "@/store/modules/login";

@Component({})
export default class Login extends Vue {
  private userName: string = "";
  private password: string = "";

  public handleLogin() {
    console.log("Handling Login!!!");
    UserModule.Login({
      username: this.userName,
      password: this.password
    }).then(() => {
      this.$router.push({ path: "/" });
    });
  }
}
</script>