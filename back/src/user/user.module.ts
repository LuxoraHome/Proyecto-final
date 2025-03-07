import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserSeed } from './seeder/user.seed';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    MailModule
  ],
  controllers: [UserController],
  providers: [UserService, UserSeed],
  exports: [UserService],
})
export class UserModule { }
