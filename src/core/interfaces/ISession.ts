export interface IApplication {
  version: string;
  releaseDate: Date;
  features: any;
}

export interface IUser {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  id: number;
}

export interface ITenant {
  tenancyName: string;
  name: string;
  id: number;
}

export interface ILoginInformation {
  application: IApplication;
  user: IUser;
  tenant: ITenant;
}
