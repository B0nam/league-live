import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { hash } from 'bcrypt';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('delete-my-user')
  async delete(@Req() request: Request) {
    const requestUser = request['user'];
    await this.userService.remove(requestUser.userId);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch('recovery-password')
  async recoveryPassword(@Body() body, @Req() request: Request) {
    const requestUser = request['user'];
    const storedUser = await this.userService.findById(requestUser.userId);

    const hashedPassword = await hash(body.password, process.env.BCRYPT_SALT);
    storedUser.password = hashedPassword;
    await this.userService.update(storedUser.id, storedUser);
  }
}
