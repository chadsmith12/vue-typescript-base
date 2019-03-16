export enum SnackbarType {
  Error,
  Success,
  Info
}

export interface ISnackbar {
  snackBarType: SnackbarType;
  message: string;
}
