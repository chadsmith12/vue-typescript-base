<template>
  <v-toolbar flat prominent dark>
    <v-toolbar-title class="tertiary--text font-weight-light">
      <v-btn v-if="isResponsive" class="default v-btn--simple" dark icon @click.stop="onBtnClick">
        <v-icon>view_headline</v-icon>
      </v-btn>
    </v-toolbar-title>
    <v-spacer/>
    <v-toolbar-items>
      <v-flex align-center layout py-2>
        <v-text-field v-if="responsiveInput" class="mr-4" label="Search..." hide-details/>
        <router-link v-ripple class="toolbar-items" to="/">
          <v-icon>dashboard</v-icon>
        </router-link>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Toolbar extends Vue {
  isResponsive: boolean = false;
  responsiveInput: boolean = false;

  private onResponsiveInverted() {
    if (window.innerWidth < 991) {
      this.responsiveInput = false;
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
      this.responsiveInput = true;
    }
  }

  mounted() {
    this.onResponsiveInverted();

    window.addEventListener("resize", this.onResponsiveInverted);
  }
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
}
</script>

<style>
#core-toolbar a {
  text-decoration: none;
}
</style>