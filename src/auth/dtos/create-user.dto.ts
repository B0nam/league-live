import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
