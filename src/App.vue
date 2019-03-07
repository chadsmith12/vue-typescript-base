<template>
  <v-app>
    <SideBar/>
    <Toolbar/>
    <MainLayout/>
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
export default class App extends Vue {}
</script>
