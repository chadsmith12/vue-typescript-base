<template>
  <v-navigation-drawer
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
    v-model="isDrawerOpen"
  >
    <v-list>
      <v-list-tile></v-list-tile>
    </v-list>
    <v-layout class="fill-height" tag="v-list" column>
      <v-list-title></v-list-title>
    </v-layout>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class SideBar extends Vue {
  isOpen: boolean = true;
  isResponsive: boolean = false;
  logo: string = "@/assets/logo.png";

  get isDrawerOpen() {
    return this.isOpen;
  }
  set isDrawerOpen(value: boolean) {
    this.isOpen = value;
  }

  private onResponsiveInverted() {
    if (window.innerWidth < 991) {
      this.isResponsive = true;
    } else {
      this.isResponsive = false;
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