import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SigninDto } from './dtos/signin.dto';
import { sign } from 'crypto';

describe('AppController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const signinDto = new SigninDto();
      signinDto.password = '';
      signinDto.username = '';
      expect(authController.signin(signinDto));
    });
  });
});
