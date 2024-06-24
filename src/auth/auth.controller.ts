import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin.dto';
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
}
