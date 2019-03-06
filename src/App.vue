<template>
  <v-app>
    <SideBar/>
    <MainLayout/>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SideBar from "@/components/SideBar.vue";
import MainLayout from "@/views/Main.vue";

@Component({
  components: {
    SideBar,
    MainLayout
  }
})
export default class App extends Vue {}
</script>
