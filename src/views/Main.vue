<template>
  <div>
    <core-toolbar/>

    <core-drawer/>

    <core-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class MainLayout extends Vue {}
</script>