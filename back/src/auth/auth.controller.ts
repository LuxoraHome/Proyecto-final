import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: CreateAuthDto) {
    return this.authService.signUp({ ...user });
  }

  @Post('login')
  async login(@Body() credentials: LoginAuthDto ) {
    return this.authService.signIn(credentials);
  }
}