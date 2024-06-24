import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { hash } from 'bcrypt';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { EntityIdDto } from 'src/common/dto/entity-id.dto';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './entities/user.entity';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({
    description: 'You have successfully registered.',
    type: EntityIdDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async sigup(@Body() createUserDto: CreateUserDto) {
    createUserDto.password = await hash(createUserDto.password, process.env.BCRYPT_SALT);
    const createdUser = await this.userService.create(createUserDto as unknown as User);
    return new EntityIdDto(createdUser.id);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete-my-user')
  async delete(@Req() request: Request) {
    try {
      const requestUser = request['user'];
      await this.userService.remove(requestUser.userId);
    } catch (error) {
      throw new Error(`Erro ao remover usuario: ${error.message}`);
    }
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('recover-password')
  async recoverPassword(@Body() body, @Req() request: Request) {
    try {
      const requestUser = request['user'];
      const storedUser = await this.userService.findById(requestUser.userId);
  
      const hashedPassword = await hash(body.password, process.env.BCRYPT_SALT);
      storedUser.password = hashedPassword;
      await this.userService.update(storedUser.id, storedUser);
    } catch (error) {
      throw new Error(`Erro ao restaurar senha: ${error.message}`);
    }
  }
}
