import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeagueDataModule } from './league-data/league-data.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { LoggerModule } from './logger/logger.module';
import { RequestLogMiddleware } from './logger/middlewares/request-log.middleware';
import { LeagueStatsModule } from './league-stats/league-stats.module';

@Module({
  imports: [
    LeagueDataModule,
    LeagueStatsModule,
    AuthModule,
    LoggerModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLogMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
