<template>
  <v-dialog v-model="isOpen" :max-width="maxWidth" @keydown.esc="onEsc" lazy>
    <v-card>
      <v-card-title>{{modalTitle}}</v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="isOpen = false">{{ cancelButtonText }}</v-btn>
        <v-btn color="primary" @click="onSave">{{ saveButtonText }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class Modal extends Vue {
  @Prop({ type: String, default: "" })
  title!: string;
  @Prop({ type: Boolean, default: false })
  readonly value!: boolean;
  @Prop({ type: [String, Number], default: "" })
  readonly maxWidth!: string | number;
  @Prop({ type: String, default: "Save" })
  readonly saveButtonText!: string;
  @Prop({ type: String, default: "Cancel" })
  readonly cancelButtonText!: string;

  get modalTitle() {
    return this.title;
  }

  // determines if the modal is currently open
  get isOpen() {
    return this.value;
  }
  set isOpen(newVal) {
    this.onModalEvent(newVal);
  }

  // input event to get emitted when modal open and closes
  @Emit("input")
  onModalEvent(newVal: boolean) {
    return newVal;
  }

  @Emit("save-click")
  onSave() {
    return;
  }

  @Emit("esc-press")
  onEsc() {
    return;
  }
}
</script>