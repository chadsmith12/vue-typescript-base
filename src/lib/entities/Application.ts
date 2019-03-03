import { IApplication } from "@/lib/interfaces/ISession";

export default class Application implements IApplication {
  version: string = "";
  releaseDate: Date = new Date();
  features: any;
}
