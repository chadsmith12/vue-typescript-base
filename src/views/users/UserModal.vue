<template>
  <Modal
    v-model="showUserModal"
    :title="formTitle"
    @save-click="saveUser"
    @esc-press="onEscPressed"
    max-width="600"
  >
    <v-container fluid>
      <v-layout>
        <v-flex xs6>
          <v-text-field label="Username *" required v-model="currentUser.userName"></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field label="Email *" required v-model="currentUser.emailAddress"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs6>
          <v-text-field label="First Name *" required v-model="currentUser.firstName"></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field label="Last Name *" required v-model="currentUser.lastName"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout v-if="currentUser.id === 0">
        <v-flex xs6>
          <v-text-field label="Password *" required v-model="currentUser.password"></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field label="Confirm Password *" required v-model="currentUser.confirmPassword"></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs6>
          <v-select
            multiple
            chips
            hint="Select User Roles"
            label="User Roles"
            :items="currentUser.roles"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs6>
          <v-checkbox label="Is Active" required></v-checkbox>
        </v-flex>
      </v-layout>
    </v-container>
  </Modal>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { UserModule } from "@/store/modules/users";
import UserModalViewModel from "@/models/users/UserModalViewModel";

@Component({})
export default class UserModal extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly value!: boolean;

  get currentUser() {
    return UserModule.editedUser;
  }

  get formTitle() {
    return UserModule.formTitle;
  }

  get showUserModal() {
    return this.value;
  }
  set showUserModal(newVal: boolean) {
    this.onValueChange(newVal);
  }

  @Emit("input")
  onValueChange(newVal: boolean) {
    return newVal;
  }

  @Emit("save-click")
  userSaved() {
    return;
  }

  onEscPressed() {
    this.onValueChange(false);
  }

  saveUser() {
    this.userSaved();
  }
}
</script>