import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      console.log('🔹 Headers:', request.headers);
    
      const authHeader = request.headers['authorization'];
      console.log('🔹 Header Authorization:', authHeader);
    
      if (!authHeader) {
        console.log('❌ No se encontró el header de autorización');
        throw new UnauthorizedException('Authorization header not found');
      }
    
      const token = authHeader.split(' ')[1] ?? '';
      if (!token) {
        console.log('❌ No se encontró el token en la cabecera');
        throw new UnauthorizedException('Token not found');
      }
    
      try {
        const secret = process.env.JWT_SECRET;
        const payload = await this.jwtService.verifyAsync(token, { secret });
        
        request.user = payload;
        console.log('✅ Usuario autenticado:', request.user);
    
        return true;
      } catch (err) {
        console.log('❌ Error al verificar el token:', err);
        throw new UnauthorizedException('Token inválido');
      }
    }
    
  }