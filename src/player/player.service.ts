import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>
  ) { }

  async create(createPlayerDto: CreatePlayerDto) {
    return await this.playerRepository.save(createPlayerDto);
  }

  async findAll() {
    return await this.playerRepository.find();
  }

  async findOne(id: number) {
    return this.playerRepository.findOneBy({ id });
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return await this.playerRepository.update({ id }, updatePlayerDto);
  }

  async remove(id: number) {
    return await this.playerRepository.delete({ id });
  }
}
