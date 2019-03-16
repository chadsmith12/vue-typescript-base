import store from "@/store/store";
import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";
import SnackbarMessage from "@/core/user-interface-models/Snackbar";
import { SnackbarType } from "@/core/user-interface-models/ISnackbar";

@Module({ dynamic: true, store, name: "snackbar" })
export default class SnackBarState extends VuexModule {
  public snackBar = new SnackbarMessage(SnackbarType.Success, "");

  /**
   * Shows a snackbar to the user of the type and message passed in.
   * @param payload The snackbar mesasge
   */
  @Mutation
  public SHOW_SNACKBAR(payload: SnackbarMessage): void {
    this.snackBar.message = payload.message;
    this.snackBar.snackBarType = payload.snackBarType;
    this.snackBar.isShown = true;
  }

  /**
   * Hides the snackbar that was currently being shown to the user.
   */
  @Mutation
  public HIDE_SNACKBAR(): void {
    this.snackBar.resetSnackbar();
  }
}

export const SnackbarModule: SnackBarState = getModule(SnackBarState);
