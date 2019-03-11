<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex md12>
        <v-data-table
          :headers="userModel.headers"
          :items="userModel.users"
          :loading="userModel.isLoadingUsers"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td>{{props.item.fullName}}</td>
            <td>{{props.item.userName}}</td>
            <td>{{props.item.emailAddress}}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserDto from "@/core/entities/User/UserDto";
import UsersModel from "@/models/users/UsersModel";
import { UserModule } from "@/store/modules/users";

@Component({})
export default class Users extends Vue {
  userModel: UsersModel = new UsersModel();

  async mounted() {
    await this.getUsers();
  }

  async getUsers() {
    this.userModel.isLoadingUsers = true;
    const users = await UserModule.getAllUsers();
    this.userModel.users = users;
    this.userModel.isLoadingUsers = false;
  }
}
</script>