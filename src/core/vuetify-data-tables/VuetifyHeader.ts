export class VuetifyHeader {
  text: string = "";
  value: string = "";
  align?: Align;
  sortable?: boolean = true;
  class?: string[] | string;
  width?: string;
}

export enum Align {
  left = "left",
  center = "center",
  right = "right"
}

export default { VuetifyHeader, Align };
