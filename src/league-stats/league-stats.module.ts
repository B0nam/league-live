import { Module } from '@nestjs/common';
import { LeagueStatsService } from './league-stats.service';
import { LeagueStatsController } from './league-stats.controller';
import { LeagueDataService } from 'src/league-data/league-data.service';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './entity/player.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Player])],
  controllers: [LeagueStatsController],
  providers: [LeagueStatsService, LeagueDataService],
})
export class LeagueStatsModule {}
