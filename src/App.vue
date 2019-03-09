<template>
  <v-app>
    <core-toolbar/>

    <core-drawer/>

    <core-view/>
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