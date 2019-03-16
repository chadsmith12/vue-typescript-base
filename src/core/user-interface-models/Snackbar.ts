import { ISnackbar, SnackbarType } from "@/core/user-interface-models/ISnackbar";

/**
 * class that represents the model to show a snackbar message to a user.
 */
export default class SnackbarMessage implements ISnackbar {
  snackBarType: SnackbarType = SnackbarType.Success;
  message: string = "";
  isShown: boolean = false;

  constructor(snackBarType: SnackbarType, message: string) {
    this.snackBarType = snackBarType;
    this.message = message;
  }

  /**
   * returns the color needed for the snackboard based off the snack bar type.
   */
  public get Color(): string {
    if (this.snackBarType === SnackbarType.Error) {
      return "error";
    } else if (this.snackBarType === SnackbarType.Info) {
      return "info";
    } else {
      return "success";
    }
  }

  /**
   * Resets the snackbar to the beginning state.
   * beginning state will be the empty message and the type of success.
   */
  public resetSnackbar(): void {
    this.message = "";
    this.snackBarType = SnackbarType.Success;
    this.isShown = false;
  }
}
