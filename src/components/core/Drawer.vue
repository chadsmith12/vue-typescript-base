<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    dark
    floating
    persistent
    mobile-break-point="991"
    width="260"
  >
    <v-img :src="bgImage" height="100%">
      <v-layout class="fill-height" tag="v-list" column>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img :src="logo" height="34" contain/>
          </v-list-tile-avatar>
          <v-list-tile-title class="title">App Name</v-list-tile-title>
        </v-list-tile>
        <v-divider/>
        <v-list-tile v-if="responsive">
          <v-text-field class="purple-input search-input" label="Search..." color="purple"/>
        </v-list-tile>
        <v-list-tile
          v-for="navigationItem in navigationItems"
          :key="navigationItem.name"
          :to="navigationItem.path"
          active-class="success"
          avatar
          class="v-list-item"
        >
          <v-list-tile-action v-if="navigationItem.meta.icon">
            <v-icon>{{ navigationItem.meta.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>{{ navigationItem.meta.title }}</v-list-tile-title>
        </v-list-tile>
      </v-layout>
    </v-img>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";

@Component({})
export default class Drawer extends Vue {
  logo: string = "./img/vuetifylogo.png";
  responsive: boolean = false;

  get navigationItems() {
    return AppModule.navigation.MenuItems;
  }

  get bgImage() {
    return AppModule.drawerBgImage;
  }

  get inputValue() {
    return AppModule.drawer;
  }
  set inputValue(value) {
    AppModule.setDrawer(value);
  }

  private onResponsiveInverted() {
    if (window.innerWidth < 991) {
      this.responsive = true;
    } else {
      this.responsive = false;
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

<style lang="scss">
#app-drawer {
  .v-list__tile {
    border-radius: 4px;

    &--buy {
      margin-top: auto;
      margin-bottom: 17px;
    }
  }

  .v-image__image--contain {
    top: 9px;
    height: 60%;
  }

  .search-input {
    margin-bottom: 30px !important;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>