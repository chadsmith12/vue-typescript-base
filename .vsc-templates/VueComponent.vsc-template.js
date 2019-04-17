(function Template() {
  const camelize = str => str.replace(/\W+(.)/g, (_match, chr) => chr.toUpperCase());

  return {
    userInputs: [
      {
        title: "Component Name",
        argumentName: "name",
        defaultValue: "Component"
      }
    ],
    template: [
      {
        type: "file",
        name: inputs => `${camelize(inputs.name)}.vue`,
        content: inputs => `<template>
    <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ${camelize(inputs.name)} extends Vue {

}
</script>
            `
      }
    ]
  };
});
