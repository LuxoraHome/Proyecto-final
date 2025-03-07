import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from 'src/mail/mail.module'; // se agrega el módulo de mail

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'MY_SECRET_KEY',
      signOptions: { expiresIn: '1h' },
    }),
    MailModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule { }