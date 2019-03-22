<template>
  <Modal
    v-model="showUserModal"
    :title="formTitle"
    @save-click="saveUser"
    @esc-press="onEscPressed"
    max-width="600"
  >
    <v-form v-model="currentUser.isModelValid" ref="userForm" :lazy-validation="true">
      <v-container fluid>
        <v-layout>
          <v-flex xs6>
            <v-text-field
              label="Username *"
              required
              v-model="currentUser.userName"
              :rules="currentUser.isRequiredRules"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Email *"
              required
              v-model="currentUser.emailAddress"
              :rules="currentUser.emailRules"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs6>
            <v-text-field
              label="First Name *"
              required
              v-model="currentUser.firstName"
              :rules="currentUser.isRequiredRules"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Last Name *"
              required
              v-model="currentUser.lastName"
              :rules="currentUser.isRequiredRules"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout v-if="currentUser.isNewUser">
          <v-flex xs6>
            <v-text-field
              label="Password *"
              type="password"
              required
              v-model="currentUser.password"
              :rules="currentUser.passwordRules"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              label="Confirm Password *"
              type="password"
              required
              v-model="currentUser.confirmPassword"
              :rules="currentUser.confirmPasswordRules"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs6>
            <v-select
              multiple
              chips
              hint="Select User Roles"
              label="User Roles"
              :items="currentUser.roleSelectList"
              v-model="currentUser.userRoles"
            ></v-select>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs6>
            <v-checkbox label="Is Active" required v-model="currentUser.isActive"></v-checkbox>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </Modal>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { UserModule } from "@/store/modules/users";
import UserModalViewModel from "@/models/users/UserModalViewModel";
import { SnackbarModule } from "@/store/modules/snackbar";
import SnackbarMessage from "@/core/user-interface-models/Snackbar";
import { SnackbarType } from "@/core/user-interface-models/ISnackbar";

@Component({})
export default class UserModal extends Vue {
  @Prop({ type: Boolean, default: false })
  readonly value!: boolean;

  $refs!: {
    userForm: any;
  };

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
    this.$refs.userForm.reset();
    return newVal;
  }

  @Emit("save-changes")
  userSaved() {
    return;
  }

  onEscPressed() {
    this.onValueChange(false);
  }

  async saveUser() {
    if (!this.currentUser.isModelValid) return;

    try {
      if (this.currentUser.isNewUser) {
        await UserModule.createUser(this.currentUser);
      } else {
        await UserModule.updateUser(this.currentUser);
      }
    } catch (error) {
      SnackbarModule.SHOW_SNACKBAR(
        new SnackbarMessage(
          SnackbarType.Error,
          "An error occured. Please try again."
        )
      );
      return;
    }

    this.userSaved();
    this.onValueChange(false);
  }
}
</script>