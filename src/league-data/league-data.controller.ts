import { Controller, Get, Param } from '@nestjs/common';
import { LeagueDataService } from './league-data.service';
import { MasteryDto } from './interfaces/mastery.interface';
import { AccountDto } from './dtos/account.dto';
import { LeagueEntryDto } from './dtos/league-entry.dto';
import { ApiTags } from '@nestjs/swagger';
import { SummonerDto } from './dtos/summoner.dto';

@ApiTags('league-data')
@Controller('league-data')
export class LeagueDataController {
    constructor(private readonly leagueDataService: LeagueDataService) { }

    @Get('account/:username/:tag')
    async getAccountData(@Param('username') username: string, @Param('tag') tag: string): Promise<AccountDto> {
        const accountData = await this.leagueDataService.getAccountData(username, tag).toPromise();
        return accountData;
    }

    @Get('summoner/:accountId')
    async getSummonerData(@Param('accountId') accountId: string): Promise<SummonerDto> {
        return await this.leagueDataService.getSummonerData(accountId).toPromise();
    }

    @Get('player/:username/:tag')
    async getPlayerData(@Param('username') username: string, @Param('tag') tag: string): Promise<any> {
        try {
            return await this.leagueDataService.getPlayerData(username, tag);
        } catch (error) {
            throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
        }
    }

    @Get('mastery/:accountId')
    async getMasteryData(@Param('accountId') accountId: string): Promise<MasteryDto[]> {
        try {
            return await this.leagueDataService.getMasteryData(accountId).toPromise();
        } catch (error) {
            throw new Error(`Erro ao obter dados de maestria: ${error.message}`);
        }
    }

    @Get('league/:summonerId')
    async getLeagueData(@Param('summonerId') summonerId: string): Promise<LeagueEntryDto[]> {
      return await this.leagueDataService.getLeagueData(summonerId).toPromise(); 
    }

    @Get('status')
    async getApiStatus(): Promise<any> {
        return this.leagueDataService.getRiotApiStatus();
    }
}