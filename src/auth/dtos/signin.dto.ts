import { IsNotEmpty, MinLength } from 'class-validator';

export class SigninDto {
  @IsNotEmpty()
  @MinLength(8)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
