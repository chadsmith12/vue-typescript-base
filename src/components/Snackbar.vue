<template>
  <v-snackbar v-model="snackbar.isShown" :color="snackbar.Color" :top="true">
    {{ snackbar.message }}
    <v-btn dark flat @click="hideSnackbar">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SnackbarModule } from "@/store/modules/snackbar";

@Component({})
export default class Snackbar extends Vue {
  get snackbar() {
    return SnackbarModule.snackBar;
  }

  hideSnackbar() {
    SnackbarModule.HIDE_SNACKBAR();
  }
}
</script>