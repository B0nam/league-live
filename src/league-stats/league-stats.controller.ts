import { Controller, Get, Param, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { LeagueStatsService } from './league-stats.service';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { LeaderboardParams } from './dto/leaderboard.params';
import { searchParams } from '../common/entity/searchParams';

@ApiTags('league-stats')
@Controller('league-stats')
export class LeagueStatsController {
  constructor(private readonly leagueStatsService: LeagueStatsService) { }

  @Get('/:username/:tag')
  async getPlayerView(
    @Param() params: searchParams,
  ): Promise<any> {
    try {
      return await this.leagueStatsService.getPlayerView(params.username, params.tag);
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }

  @Get('/export/:username/:tag')
  async exportPlayerView(
    @Param() params: searchParams,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const imagePath = await this.leagueStatsService.exportPlayerView(params.username, params.tag);
      res.sendFile(imagePath);
    } catch (error) {
      res.status(500).send(`Erro ao exportar a view do jogador: ${error.message}`);
    }
  }

  @Get('leaderboard/:queue/:tier/:division')
  async getLeaderboard(
    @Param() params: LeaderboardParams,
  ): Promise<any> {
    try {
      return this.leagueStatsService.getLeaderboard(params.queue, params.tier, params.division);
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }
}