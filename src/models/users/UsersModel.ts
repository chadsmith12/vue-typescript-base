import { VuetifyHeader, Align } from "@/core/vuetify-data-tables/VuetifyHeader";
import UserDto from "@/core/entities/User/UserDto";

export default class UsersModel {
  headers: Array<VuetifyHeader> = [
    {
      text: "First Name",
      value: "fullName",
      align: Align.left
    },
    {
      text: "Username",
      value: "userName"
    },
    {
      text: "Email Address",
      value: "emailAddress"
    },
    {
      text: "Actions",
      value: "id",
      sortable: false
    }
  ];

  users: Array<UserDto> = new Array<UserDto>();
}
