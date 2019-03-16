<template>
  <v-dialog v-model="isModalShown" @keydown.esc="setValue(false)" max-width="600">
    <v-form>
      <v-card>
        <v-card-title>{{ formTitle }}</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-layout>
              <v-flex xs6>
                <v-text-field
                  label="Username *"
                  required
                  :rules="userModel.userNameRules"
                  v-model="userModel.createUser.userName"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  label="Email *"
                  required
                  type="email"
                  v-model="userModel.createUser.emailAddress"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-text-field label="First Name *" required v-model="userModel.createUser.name"></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field label="Last Name *" required v-model="userModel.createUser.surname"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-text-field
                  label="Password *"
                  required
                  type="password"
                  :rules="userModel.passwordRules"
                  v-model="userModel.createUser.password"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  label="Confirm Password *"
                  required
                  type="password"
                  :rules="userModel.confirmPasswordRules"
                  v-model="userModel.confirmPassword"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs6>
                <v-checkbox label="Is Active" required v-model="userModel.createUser.isActive"></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="isModalShown = false">Cancel</v-btn>
          <v-btn color="primary" @click="saveUser()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import CreateUserModel from "@/models/users/CreateUserModel";
import UserDto from "@/core/entities/User/UserDto";
import { UserModule } from "@/store/modules/users";

@Component({})
export default class CreateUserModal extends Vue {
  @Prop({ type: Boolean, default: false })
  value!: boolean;

  userModel: CreateUserModel = new CreateUserModel();
  formTitle: string = "";

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
    const user = await UserModule.createUser(this.userModel.createUser);
    this.saveChanges(user);
    this.userModel.resetModel();
    this.isModalShown = false;
  }

  onModalShown() {
    this.formTitle = UserModule.formTitle;
  }
}
</script>


