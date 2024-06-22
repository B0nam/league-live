import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueDataModule } from './league-data/league-data.module';

@Module({
  imports: [LeagueDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
