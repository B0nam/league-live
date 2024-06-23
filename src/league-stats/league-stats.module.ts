import { Module } from '@nestjs/common';
import { LeagueStatsService } from './league-stats.service';
import { LeagueStatsController } from './league-stats.controller';
import { LeagueDataService } from 'src/league-data/league-data.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LeagueStatsController],
  providers: [LeagueStatsService, LeagueDataService],
})
export class LeagueStatsModule {}
