import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";
import store from "@/store/store";

export interface IAppState {
  drawer: boolean | null;
  drawerBgImage: string;
}

@Module({ dynamic: true, store, name: "app" })
class AppState extends VuexModule implements IAppState {
  drawer: boolean | null = null;
  drawerBgImage: string =
    "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg";

  get drawerState(): boolean | null {
    return this.drawer;
  }

  @Mutation
  setDrawer(value: boolean | null): void {
    this.drawer = value;
  }
}
export const AppModule: AppState = getModule(AppState);
