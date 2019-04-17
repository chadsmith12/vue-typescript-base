import ValidationRules, { ValidationRule } from "@/core/helpers/validation-helpers";

export default class LoginModel {
  username: string = "";
  password: string = "";

  get userNameRules(): Array<ValidationRule> {
    return [(v: string) => ValidationRules.valueIsRequired(v) || "Username is required..."];
  }

  get passwordRules(): Array<ValidationRule> {
    return [
      (v: string) => ValidationRules.valueIsRequired(v) || "Please enter a password...",
      (v: string) => ValidationRules.isValidLength(v, 6) || "Password must be at least 6 characters"
    ];
  }
}
