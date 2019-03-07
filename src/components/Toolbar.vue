<template>
  <v-toolbar :clipped-left="true" app absolute>
    <v-toolbar-title>App Title</v-toolbar-title>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({})
export default class Toolbar extends Vue {}
</script>