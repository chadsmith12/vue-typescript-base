/**
 * This presents a header inside a Vuetify table
 */
export class VuetifyHeader {
  text: string = "";
  value: string = "";
  align?: Align;
  sortable?: boolean = true;
  class?: string[] | string;
  width?: string;
}

/**
 * The align options for a vuetify column def
 */
export enum Align {
  left = "left",
  center = "center",
  right = "right"
}
