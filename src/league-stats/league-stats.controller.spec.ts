import { Test, TestingModule } from '@nestjs/testing';
import { LeagueStatsController } from './league-stats.controller';
import { LeagueStatsService } from './league-stats.service';

describe('LeagueStatsController', () => {
  let controller: LeagueStatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeagueStatsController],
      providers: [LeagueStatsService],
    }).compile();

    controller = module.get<LeagueStatsController>(LeagueStatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
