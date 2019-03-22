<template>
  <v-dialog v-model="isOpen" @keydown.esc="onConfirmation(false)" width="500">
    <v-card>
      <v-card-title>{{ message }}</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="onConfirmation(false)">No</v-btn>
        <v-btn color="primary" @click="onConfirmation(true)">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component({})
export default class ConfirmationModal extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly value!: boolean;
  @Prop({ type: String, default: "", required: true })
  readonly message!: string;

  // determines if the confirmation modal is currently open
  get isOpen() {
    return this.value;
  }
  set isOpen(newVal) {
    this.onModalEvent(newVal);
  }

  // input event to get emitted when confirmation modal open and closes
  @Emit("input")
  onModalEvent(newVal: boolean) {
    return newVal;
  }

  @Emit("confirmation-click")
  onConfirmation(isConfirmed: boolean) {
    this.isOpen = false;
    return isConfirmed;
  }
}
</script>