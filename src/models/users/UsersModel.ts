import { VuetifyHeader, Align } from "@/core/vuetify-data-tables/VuetifyHeader";
import UserDto from "@/core/entities/User/UserDto";

export default class UsersModel {
  headers: Array<VuetifyHeader> = [
    {
      text: "First Name",
      value: "fullName",
      align: Align.left,
      sortable: true,
      class: "",
      width: ""
    },
    {
      text: "Username",
      value: "userName",
      align: Align.left,
      sortable: true,
      class: "",
      width: ""
    },
    {
      text: "Email Address",
      value: "emailAddress",
      align: Align.left,
      sortable: true,
      class: "",
      width: ""
    }
  ];

  users: Array<UserDto> = new Array<UserDto>();
  isLoadingUsers: boolean = true;
}
