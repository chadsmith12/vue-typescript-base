<template>
  <v-footer id="core-footer" absolute height="82">
    <span class="font-weight-line copyright">&copy; {{copyrightInfo}} - Version: {{versionInfo}}</span>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { SessionModule } from "@/store/modules/session";

@Component({})
export default class Footer extends Vue {
  get copyrightInfo() {
    return new Date().getFullYear();
  }

  get versionInfo() {
    return SessionModule.applicationVersion;
  }
}
</script>

<style>
#core-footer {
  z-index: 0;
}
.copyright {
  font-size: 0.8em;
}
</style>