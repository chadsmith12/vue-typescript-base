function isNotUndefiend(value: any): boolean {
  return typeof value !== "undefined";
}

/**
 * Checks to see that a string is actually not empty
 * @param value the string to check is not empty
 */
function valueIsRequired(value: string): boolean {
  if (isNotUndefiend(value)) {
    return !!value;
  }
  return true;
}

/**
 * Checks to see if a string is at least the size of the length passed in.
 * @param value the string to check is a valid length
 * @param length the length we are checking against
 */
function isValidLength(value: string, length: number): boolean {
  if (isNotUndefiend(value)) {
    return value.length >= length;
  }

  return true;
}

/**
 * Checks to make sure an email is in a valid format.
 * @param email The email to check is valid
 */
function isEmailValid(email: string): boolean {
  if (isNotUndefiend(email)) {
    // allows for emails in format: _@_@._
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return true;
}

/**
 * Checks to see if two strings match each other
 * @param value The string we need to check if it matches another string
 * @param test The string to test that value matches against.
 */
function matchesValue(value: string, test: string): boolean {
  return value === test;
}

/**
 * Checks to see if the array passed in has at least one item.
 * @param value The array to check if has at least one item
 */
function hasItemsSelected(value: []): boolean {
  return value.length > 0;
}

export type validationRule = (value: any) => string | boolean;

export default { valueIsRequired, isValidLength, isEmailValid, matchesValue, hasItemsSelected };
