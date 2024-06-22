import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueDataModule } from './league-data/league-data.module';
import { LeagueStatsModule } from './league-stats/league-stats.module';

@Module({
  imports: [LeagueDataModule, LeagueStatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
