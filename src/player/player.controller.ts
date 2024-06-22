import { Controller, Get, Param } from '@nestjs/common';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/:username/:tag')
  async getPlayerData(@Param('username') username: string, @Param('tag') tag: string): Promise<any> {
    try {
      return await this.playerService.getPlayerData(username, tag);
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }
}
