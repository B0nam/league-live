import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SigninDto } from './dtos/signin.dto';
import { EntityIdDto } from 'src/common/dto/entity-id.dto';
import { AccessTokenDto } from 'src/common/dto/access-token.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOkResponse({
    description: 'You have successfully logged in.',
    type: AccessTokenDto,
  })
  @Post('login')
  signin(@Body() signinDto: SigninDto) {
    return this.authService.signIn(signinDto.username, signinDto.password);
  }

  @ApiCreatedResponse({
    description: 'You have successfully registered.',
    type: EntityIdDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async sigup(@Body() createUserDto: CreateUserDto) {
    const createdUser = await this.authService.signUp(createUserDto);
    return { id: createdUser.id };
  }
}
