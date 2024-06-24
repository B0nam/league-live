import { Module } from '@nestjs/common';
import { LeagueDataController } from './league-data.controller';
import { LeagueDataService } from './league-data.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RiotTokenInterceptor } from './interceptors/riot-token/riot-token.interceptor';
import { HttpModule } from '@nestjs/axios';
import { PlayerModule } from 'src/player/player.module';

@Module({
  imports: [HttpModule, PlayerModule],
  controllers: [LeagueDataController],
  providers: [
    LeagueDataService,
    { provide: APP_INTERCEPTOR, useClass: RiotTokenInterceptor },
  ],
})
export class LeagueDataModule {}
