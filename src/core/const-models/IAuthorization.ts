import { IGoogleAuth } from "./IGoogleAuth";

export interface IAuthorization {
  encryptedAuthTokenName: string;
  googleAuth: IGoogleAuth | null;
}
