<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <v-data-table
          :headers="userModel.headers"
          :items="userModel.users"
          :loading="isLoading"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{props.item.fullName}}</td>
            <td>{{props.item.userName}}</td>
            <td>{{props.item.emailAddress}}</td>
            <td class="justify-center layout px-0">
              <v-icon small class="mr-2" @click="editUser(props.item)">mdi-pencil</v-icon>
              <v-icon small @click="deleteUser(props.item)">delete</v-icon>
            </td>
          </template>
        </v-data-table>
        <v-fab-transition>
          <v-btn @click="createUser" color="primary" dark absolute top right small fab>
            <v-icon>add</v-icon>
          </v-btn>
        </v-fab-transition>
      </v-flex>
      <UserModal v-model="showUserModal" @save-changes="saveUser"/>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserDto from "@/core/entities/User/UserDto";
import UsersModel from "@/models/users/UsersModel";
import { UserModule } from "@/store/modules/users";
import { SnackbarModule } from "@/store/modules/snackbar";
import UserModal from "@/views/users/UserModal.vue";
import SnackbarMessage from "@/core/user-interface-models/Snackbar";
import { SnackbarType } from "@/core/user-interface-models/ISnackbar";

@Component({
  components: {
    UserModal
  }
})
export default class Users extends Vue {
  userModel: UsersModel = new UsersModel();
  showUserModal: boolean = false;

  async mounted() {
    await this.getUsers();
    await UserModule.getRoles();
  }

  get isLoading() {
    return UserModule.isLoadingUsers;
  }

  async getUsers() {
    UserModule.SET_LOADING_USERS(true);
    const users = await UserModule.getAllUsers();
    this.userModel.users = users;
    UserModule.SET_LOADING_USERS(false);
  }

  createUser() {
    UserModule.SET_CREATE_USER();
    this.toggleUserModal();
  }

  editUser(user: UserDto) {
    UserModule.SET_EDITED_USER(user);
    this.toggleUserModal();
  }

  saveUser() {
    this.getUsers();
    SnackbarModule.SHOW_SNACKBAR(
      new SnackbarMessage(SnackbarType.Success, "Save Successful!")
    );
    this.toggleUserModal();
  }

  toggleUserModal() {
    this.showUserModal = !this.showUserModal;
  }
}
</script>