<template>
  <v-container fill-height fluid grid-list-xl>
    <img alt="Vue logo" src="../assets/logo.png">
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserConfigService from "@/services/services/UserConfigurationService";

@Component({})
export default class Home extends Vue {}
</script>
