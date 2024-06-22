import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StatusService } from './status/status.service';
import { HttpModule } from '@nestjs/axios';
import { StatusController } from './status/status.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { RiotTokenInterceptor } from './riot-token/riot-token.interceptor';
import { StatusModule } from './status/status.module';
import { AccountModule } from './account/account.module';
import { AccountService } from './account/account.service';
import { SummonerModule } from './summoner/summoner.module';
import { LeagueModule } from './league/league.module';
import { PlayerModule } from './player/player.module';
import { MasteryModule } from './mastery/mastery.module';

@Module({
  imports: [ HttpModule, StatusModule, AccountModule, SummonerModule, LeagueModule, PlayerModule, MasteryModule ],
  controllers: [AppController,
    StatusController
  ],
  providers: [AppService,
    StatusService,
    AccountService,
    {
      provide: APP_INTERCEPTOR,
      useClass: RiotTokenInterceptor
    }
  ],
})
export class AppModule {}
