import { Controller, Get, Param } from '@nestjs/common';
import { LeagueStatsService } from './league-stats.service';

@Controller('league-stats')
export class LeagueStatsController {
  constructor(private readonly leagueStatsService: LeagueStatsService) {}

  @Get('/:username/:tag')
  async getPlayerView(@Param('username') username: string, @Param('tag') tag: string): Promise<any> {
      try {
          return await this.leagueStatsService.getPlayerView(username, tag);
      } catch (error) {
          throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
      }
  }
}
