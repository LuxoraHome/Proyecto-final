import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/auth/enum/roles.enum';

@Injectable()
export class SuperAdminGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('Usuario no autenticado.');
    }

    if (typeof user.role === 'string' && user.role !== Role.Superadmin) {
      throw new ForbiddenException('Acceso denegado. Se requiere rol de SuperAdmin.');
    }

    if (Array.isArray(user.roles) && !user.roles.includes(Role.Superadmin)) {
      throw new ForbiddenException('Acceso denegado. Se requiere rol de SuperAdmin.');
    }


    return true;
  }
}
