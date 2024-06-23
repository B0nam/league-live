import { Test, TestingModule } from '@nestjs/testing';
import { LeagueStatsService } from './league-stats.service';

describe('LeagueStatsService', () => {
  let service: LeagueStatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeagueStatsService],
    }).compile();

    service = module.get<LeagueStatsService>(LeagueStatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
