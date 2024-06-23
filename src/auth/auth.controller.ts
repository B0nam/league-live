import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SigninDto } from './dtos/signin.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signIn(signinDto.username, signinDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  async sigup(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.authService.signUp(createUserDto);
    return { id: createdUser.id };
  }
}
