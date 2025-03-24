import { Request } from 'express';
import { Role } from 'src/auth/enum/roles.enum';

export interface AuthenticatedRequest extends Request {
  user: {
    uid: string;
    role: Role;
  };
}
