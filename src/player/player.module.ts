import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { AccountService } from 'src/account/account.service';
import { SummonerService } from 'src/summoner/summoner.service';
import { LeagueService } from 'src/league/league.service';
import { MasteryService } from 'src/mastery/mastery.service';

@Module({
  imports: [HttpModule],
  controllers: [PlayerController],
  providers: [PlayerService, AccountService, SummonerService, LeagueService, MasteryService],
})
export class PlayerModule {}
