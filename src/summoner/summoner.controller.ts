import { Controller, Get, Param } from '@nestjs/common';
import { SummonerService } from './summoner.service';
import { SummonerResponse } from './interfaces/summoner.interface';

@Controller('summoner')
export class SummonerController {
  constructor(private readonly summonerService: SummonerService) {}

  @Get('data/:accountId')
  async getSummonerData(@Param('accountId') accountId: string): Promise<SummonerResponse> {
    const summonerData = await this.summonerService.getSummonerData(accountId).toPromise();
    return summonerData;
  }
}
