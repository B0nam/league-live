import { Controller, Get, Param } from '@nestjs/common';
import { LeagueService } from './league.service';
import { LeagueResponse } from './interfaces/league.interface';

@Controller('league')
export class LeagueController {
  constructor(private readonly leagueService: LeagueService) {}

  @Get('data/:summonerId')
  async getLeagueData(@Param('summonerId') summonerId: string): Promise<LeagueResponse[]> {
    const leagueData = await this.leagueService.getLeagueData(summonerId).toPromise();
    return leagueData;
  }
}
