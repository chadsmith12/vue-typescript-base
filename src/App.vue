<template>
  <v-app>
    <snackbar/>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";

@Component({})
export default class App extends Vue {
  get isRouting() {
    return AppModule.isRouting;
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>