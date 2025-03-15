import { Role } from "src/auth/enum/roles.enum";
import { User } from "../entities/user.entity";
import { UserClient } from "../enum/userClient.enum";
import { UserStatus } from "../enum/userStatus.enum";

export class UserResponseDto {

    readonly id: string;
    readonly uid: string;
    readonly name: string;
    readonly address: string;
    readonly country?: string;
    readonly city?: string;
    readonly role: Role;
    readonly status: UserStatus;
    readonly client?: UserClient;
  
    constructor(user: Partial<User>) {
      this.id = user.id;
      this.uid = user.uid;
      this.name = user.name;
      this.address = user.address;
      this.country = user.country;
      this.city = user.city;
      this.role = user.role;
      this.status = user.status;
      this.client = user.client;
    }


}

