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
      <!-- <UserModal v-model="showUserModal" @save-changes="updateUser"/> -->
      <!-- <CreateUserModal v-model="showCreateUser" @save-changes="userCreated"/> -->
      <Modal v-model="showCreateUser" title="Create" @save-click="createUser"></Modal>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserDto from "@/core/entities/User/UserDto";
import UsersModel from "@/models/users/UsersModel";
import { UserModule } from "@/store/modules/users";
import UserModal from "@/views/users/UserModal.vue";
import CreateUserModal from "@/views/users/CreateUserModal.vue";

@Component({
  components: {
    UserModal,
    CreateUserModal
  }
})
export default class Users extends Vue {
  userModel: UsersModel = new UsersModel();
  showUserModal: boolean = false;
  showCreateUser: boolean = false;

  async mounted() {
    await this.getUsers();
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
    //UserModule.SET_CREATE_USER();
    this.showCreateUser = !this.showCreateUser;
  }

  editUser(user: UserDto) {
    UserModule.SET_EDITED_USER(user);
    this.toggleUserModal();
  }

  userCreated(user: UserDto) {
    this.getUsers();
  }

  updateUser(user: UserDto) {
    this.getUsers();
  }

  toggleUserModal() {
    this.showUserModal = !this.showUserModal;
  }
}
</script>