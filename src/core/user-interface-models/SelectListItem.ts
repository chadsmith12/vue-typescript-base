/**
 * represents a select list item inside of a select list.
 */
export default class SelectListItem {
  constructor(value: string, text: string) {
    this.value = value;
    this.text = text;
  }

  /**
   * Represents the value of this select list item.
   * In other words, this is the value of the option element.
   */
  value: string;

  /**
   * The text to be shown to the user for this item.
   */
  text: string;
}
