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

  findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ email });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async create(user: User): Promise<User | null> {
    const sameUsernameUser = await this.findByUsername(user.username); 

    if (sameUsernameUser && sameUsernameUser !== null) {
      throw new ConflictException({
        message: 'There is already an user with this username.',
      });
    }

    const sameEmailUser = await this.findByEmail(user.email);
    
    if (sameEmailUser && sameEmailUser !== null) {
      throw new ConflictException({
        message: 'There is already an user with this email.',
      });
    }

    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<void> {
    await this.userRepository.update({ id }, user);
  }
}
