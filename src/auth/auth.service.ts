import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.findByUsername(username);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException('The email or password is wrong');
    }

    if (!(await compare(pass, user.password))) {
      throw new UnauthorizedException('The email or password is wrong');
    }

    const payload = { userId: user.id, username: user.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(user: User): Promise<User> {
    user.password = await hash(user.password, process.env.BCRYPT_SALT);
    return await this.userService.create(user);
  }
}
