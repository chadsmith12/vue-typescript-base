import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";

export interface IAppState {
  drawer: boolean | null;
  drawerBgImage: string;
  isRouting: boolean;
}

@Module({ dynamic: true, store, name: "app" })
class AppState extends VuexModule implements IAppState {
  drawer: boolean | null = null;
  drawerBgImage: string =
    "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg";
  isRouting: boolean = false;

  @Action({ commit: "SET_ROUTING" })
  pendingRoute(): boolean {
    return true;
  }

  @Action({ commit: "SET_ROUTING" })
  routeCompleted(): boolean {
    return false;
  }

  get drawerState(): boolean | null {
    return this.drawer;
  }

  @Mutation
  setDrawer(value: boolean | null): void {
    this.drawer = value;
  }

  @Mutation
  SET_ROUTING(isRouting: boolean): void {
    this.isRouting = isRouting;
  }
}
export const AppModule: AppState = getModule(AppState);
