import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserSeed } from './seeder/user.seed';
import { UserResponseDto } from './dto/user-response.dto';
// import { SuperAdminGuard } from './superadmin-guard';
import { AuthenticatedRequest } from './user-interface';
// import { JwtAuthGuard } from './Jwtauthguard';
import { AuthGuard } from 'src/auth/auth.guards';
import { ApiBearerAuth, ApiExcludeEndpoint } from '@nestjs/swagger';
import { Role } from 'src/auth/enum/roles.enum';
import { Roles } from 'src/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guards';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly userSeed: UserSeed,
  ) {}

  @Post()
  @ApiExcludeEndpoint()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Post('seeder')
  @ApiExcludeEndpoint()
  async seeder() {
    try {
      return await this.userSeed.createUserSeeder();
    } catch (error) {
      throw new BadRequestException('Error al cargar los usuarios precargados');
    }
  }

  @Get()
  async findAll() {
    return await this.userService.findAllUsers();
  }

  @Get('public')
  @ApiExcludeEndpoint()
  async findAllPublic() {
    const users = await this.userService.findAllUsers();
    const responseUser = users.map((user) => new UserResponseDto(user));
    return responseUser;
  }

  @Get(':uid')
  async findOne(@Param('uid') uid: string) {
    return await this.userService.findOneById(uid);
  }

  @Put(':userUid')
  @ApiBearerAuth()
  @Roles(Role.Superadmin)
  @UseGuards(AuthGuard, RolesGuard)
  async updateUser(
    @Req() req: AuthenticatedRequest, // Obtener datos del usuario autenticado
    @Param('userUid') userUid: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const adminUid = req.user.uid; // Obtener UID del usuario autenticado
    return this.userService.updateUser(adminUid, userUid, updateUserDto);
  }

  @Delete(':id')
  @ApiExcludeEndpoint()
  async remove(@Param('id') id: string) {
    return await this.userService.removeUser(id);
  }
}
