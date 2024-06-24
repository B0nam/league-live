import { Controller, Get, Param } from '@nestjs/common';
import { LeagueDataService } from './league-data.service';
import { MasteryDto } from './interfaces/mastery.interface';
import { AccountDto } from './dtos/account.dto';
import { LeagueEntryDto } from './dtos/league-entry.dto';
import { ApiTags } from '@nestjs/swagger';
import { SummonerDto } from './dtos/summoner.dto';
import { SearchParams } from 'src/common/dto/search.params';

@ApiTags('league-data')
@Controller('league-data')
export class LeagueDataController {
  constructor(private readonly leagueDataService: LeagueDataService) { }

  @Get('account/:username/:tag')
  async getAccountData(
    @Param() params: SearchParams,
  ): Promise<AccountDto> {
    try {
      const accountData = await this.leagueDataService
        .getAccountData(params.username, params.tag)
        .toPromise();
      return accountData;
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }

  @Get('summoner/:accountId')
  async getSummonerData(
    @Param('accountId') accountId: string,
  ): Promise<SummonerDto> {
    try {
      return await this.leagueDataService.getSummonerData(accountId).toPromise();
    } catch (error) {
      throw new Error(`Erro ao obter summonerId: ${error.message}`);
    }
  }

  @Get('player/:username/:tag')
  async getPlayerData(
    @Param() params: SearchParams,
  ): Promise<any> {
    try {
      return await this.leagueDataService.getPlayerData(params.username, params.tag);
    } catch (error) {
      throw new Error(`Erro ao obter dados do player: ${error.message}`);
    }
  }

  @Get('mastery/:accountId')
  async getMasteryData(
    @Param('accountId') accountId: string,
  ): Promise<MasteryDto[]> {
    try {
      return await this.leagueDataService.getMasteryData(accountId).toPromise();
    } catch (error) {
      throw new Error(`Erro ao obter dados de ranking: ${error.message}`);
    }
  }

  @Get('league/:summonerId')
  async getLeagueData(
    @Param('summonerId') summonerId: string,
  ): Promise<LeagueEntryDto[]> {
    try {
      return await this.leagueDataService.getLeagueData(summonerId).toPromise();
    } catch (error) {
      throw new Error(`Erro ao obter dados de campeoes: ${error.message}`);
    }
  }

  @Get('status')
  async getApiStatus(): Promise<any> {
    try {
      return this.leagueDataService.getRiotApiStatus();
    } catch (error) {
      throw new Error(`Erro ao obter status da riot: ${error.message}`);
    }
  }
}
