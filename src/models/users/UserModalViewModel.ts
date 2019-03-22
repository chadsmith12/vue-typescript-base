import UserDto from "@/core/entities/User/UserDto";
import RoleDto from "@/core/entities/Roles/RoleDto";
import SelectListItem from "@/core/user-interface-models/SelectListItem";
import ValidationRules, { validationRule } from "@/lib/validation-helpers/validation-helpers";

export default class UserModalViewModel {
  id: number = 0;
  userName!: string;
  emailAddress!: string;
  firstName!: string;
  lastName!: string;
  isActive: boolean = true;
  password!: string;
  confirmPassword!: string;
  userRoles!: Array<string>;
  roleSelectList!: Array<SelectListItem>;

  isModelValid: boolean = false;

  get isNewUser(): boolean {
    return this.id === 0;
  }

  get isRequiredRules(): Array<validationRule> {
    return [(value: string) => !!value || "This field is required..."];
  }

  get emailRules(): Array<validationRule> {
    return [
      (value: string) => ValidationRules.isEmailValid(value) || "Please enter a valid email address"
    ];
  }

  get passwordRules(): Array<validationRule> {
    return [
      (value: string) => ValidationRules.valueIsRequired(value) || "Please enter a password...",
      (value: string) =>
        ValidationRules.isValidLength(value, 8) || "Password must be at least 8 characters..."
    ];
  }

  get confirmPasswordRules(): Array<validationRule> {
    return [
      (value: string) =>
        ValidationRules.matchesValue(value, this.password) || "Passwords do not match..."
    ];
  }

  resetModel(): void {
    this.id = 0;
    this.userName = "";
    this.emailAddress = "";
    this.firstName = "";
    this.lastName = "";
    this.isActive = true;
    this.password = "";
    this.confirmPassword = "";
    this.roleSelectList = [];
  }

  setUser(user: UserDto, roles: Array<RoleDto>): void {
    this.id = user.id;
    this.userName = user.userName;
    this.emailAddress = user.emailAddress;
    this.firstName = user.name;
    this.lastName = user.surname;
    this.isActive = user.isActive;
    this.userRoles = user.roleNames;
    this.roleSelectList = roles.map(
      item => new SelectListItem(item.normalizedName, item.displayName)
    );
  }
}
