import UserDto from "@/core/dtos/User/UserDto";
import RoleDto from "@/core/dtos/Roles/RoleDto";
import SelectListItem from "@/core/user-interface-models/SelectListItem";
import ValidationRules, { ValidationRule } from "@/core/helpers/validation-helpers";

export default class UserModalViewModel {
  user: UserDto = new UserDto();
  password!: string;
  confirmPassword!: string;
  roleSelectList!: Array<SelectListItem>;

  isModelValid: boolean = false;

  constructor(roles: Array<RoleDto>, userDto: UserDto | null = null) {
    this.roleSelectList = roles.map(
      item => new SelectListItem(item.normalizedName, item.displayName)
    );

    if (userDto !== null) {
      this.user = userDto;
    }
  }

  get formTitle(): string {
    if (this.user.id === 0) {
      return "Create User";
    } else {
      return "Edit User";
    }
  }

  get isNewUser(): boolean {
    return this.user.id === 0;
  }

  get isRequiredRules(): Array<ValidationRule> {
    return [(value: string) => !!value || "This field is required..."];
  }

  get emailRules(): Array<ValidationRule> {
    return [
      (value: string) => ValidationRules.isEmailValid(value) || "Please enter a valid email address"
    ];
  }

  get passwordRules(): Array<ValidationRule> {
    return [
      (value: string) => ValidationRules.valueIsRequired(value) || "Please enter a password...",
      (value: string) =>
        ValidationRules.isValidLength(value, 8) || "Password must be at least 8 characters..."
    ];
  }

  get confirmPasswordRules(): Array<ValidationRule> {
    return [
      (value: string) =>
        ValidationRules.matchesValue(value, this.password) || "Passwords do not match..."
    ];
  }
}
