<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <img alt="Vue logo" src="../assets/logo.png">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserConfigService from "@/services/services/UserConfigurationService";

@Component({})
export default class Home extends Vue {}
</script>
