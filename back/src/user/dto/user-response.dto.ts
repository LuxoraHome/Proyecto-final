import { Role } from "src/auth/enum/roles.enum";
import { User } from "../entities/user.entity";
import { UserClient } from "../enum/userClient.enum";
import { UserStatus } from "../enum/userStatus.enum";

export class UserResponseDto {

  readonly id?: string = "";
  readonly uid?: string = "";
  readonly name?: string = "";
  readonly address?: string = "";
  readonly country?: string = "";
  readonly city?: string = "";
  readonly role?: Role = Role.User;
  readonly status?: UserStatus = UserStatus.ACTIVE;
  readonly client?: UserClient = UserClient.STANDARD;

  constructor(user: Partial<User>) {
    this.id = user.id ?? "";
    this.uid = user.uid ?? "";
    this.name = user.name ?? "";
    this.address = user.address ?? "";
    this.country = user.country ?? "";
    this.city = user.city ?? "";
    this.role = user.role ?? Role.User;
    this.status = user.status ?? UserStatus.ACTIVE;
    this.client = user.client ?? UserClient.STANDARD;
  }
}
