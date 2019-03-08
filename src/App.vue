<template>
  <v-app>
    <Toolbar/>
    <SideBar/>
    <!-- <v-navigation-drawer app :mini="true"></v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>-->
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import MainLayout from "@/views/Main.vue";
import Toolbar from "@/components/Toolbar.vue";

@Component({
  components: {
    SideBar,
    Toolbar,
    MainLayout
  }
})
export default class App extends Vue {
  isDrawerOpen: boolean = false;
}
</script>