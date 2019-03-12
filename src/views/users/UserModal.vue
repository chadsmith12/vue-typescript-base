<template>
  <v-dialog v-model="isModalShown" @keydown.esc="setValue(false)" max-width="600">
    <v-card>
      <v-card-title>{{ formTitle }}</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-layout>
            <v-flex xs6>
              <v-text-field label="Username *" required v-model="userModel.userName"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Email *" required v-model="userModel.emailAddress"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <v-text-field label="First Name *" required v-model="userModel.name"></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field label="Last Name *" required v-model="userModel.surname"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs6>
              <v-checkbox label="Is Active" required v-model="userModel.isActive"></v-checkbox>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="isModalShown = false">No</v-btn>
        <v-btn color="primary" @click="saveUser()">Yes</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import UserDto from "@/core/entities/User/UserDto";
import UsersModel from "@/models/users/UsersModel";
import { UserModule } from "@/store/modules/users";
import { AppModule } from "@/store/modules/app";
import util from "@/lib/util";

@Component({})
export default class UserModal extends Vue {
  @Prop({ type: Boolean, default: false })
  value!: boolean;
  formTitle: string = "";
  userModel: UserDto = new UserDto();

  get isModalShown() {
    if (this.value === true) {
      this.onModalShown();
    }
    return this.value;
  }
  set isModalShown(newVal) {
    this.setValue(newVal);
  }

  @Emit("input")
  setValue(newVal: boolean) {
    return newVal;
  }

  @Emit("save-changes")
  saveChanges(user: UserDto) {
    return user;
  }

  async saveUser() {
    const user = await UserModule.updateUser(this.userModel);
    this.saveChanges(user);
    this.isModalShown = false;
  }

  onModalShown() {
    this.formTitle = UserModule.formTitle;
    this.userModel = UserModule.editedUser;
  }
}
</script>