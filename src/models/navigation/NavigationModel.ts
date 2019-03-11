import { IRouter } from "@/router/router-entities/IRouter";

export default class NavigationModel {
  constructor(menuItems?: Array<IRouter>) {
    if (menuItems) {
      this.MenuItems = menuItems as Array<IRouter>;
      return;
    }
  }
  MenuItems: Array<IRouter> = [];
}
