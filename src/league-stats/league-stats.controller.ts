import { Controller, Get, Param } from '@nestjs/common';
import { LeagueStatsService } from './league-stats.service';
import { ApiTags } from '@nestjs/swagger';
import { QueueType } from './entity/queue-type.enum';

@ApiTags('league-stats')
@Controller('league-stats')
export class LeagueStatsController {
  constructor(private readonly leagueStatsService: LeagueStatsService) {}

  @Get('/:username/:tag')
  async getPlayerView(
    @Param('username') username: string,
    @Param('tag') tag: string,
  ): Promise<any> {
    try {
      return await this.leagueStatsService.getPlayerView(username, tag);
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }

  @Get('leaderboard/:queue/:tier/:division')
  async getLeaderboard(
    @Param('queue') queue: QueueType,
    @Param('tier') tier: string,
    @Param('division') division: string,
  ): Promise<any> {
    return this.leagueStatsService.getLeaderboard(queue, tier, division);
  }
}
