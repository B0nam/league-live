import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ username });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(user: User): Promise<User | null> {
    const existsUser = await this.findByUsername(user.username);

    if (existsUser && existsUser !== null) {
      throw new ConflictException({
        message: 'There is already an user with this username.',
      });
    }
    return this.userRepository.save(user);
  }
}
