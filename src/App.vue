<template>
  <v-app>
    <snackbar/>
    <router-view/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>