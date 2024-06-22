import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { LeagueService } from 'src/league/league.service';
import { SummonerService } from 'src/summoner/summoner.service';
import { MasteryService } from 'src/mastery/mastery.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class PlayerService {

  constructor(
    private readonly accountService: AccountService,
    private readonly summonerService: SummonerService,
    private readonly leagueService: LeagueService,
    private readonly masteryService: MasteryService
  ) {}

  async getPlayerData(username: string, tag: string): Promise<any> {
    try {
      const accountData = await this.accountService.getAccountData(username, tag).toPromise();
      const summonerData = await this.summonerService.getSummonerData(accountData.puuid).toPromise();
      const leagueData = await this.leagueService.getLeagueData(summonerData.id).toPromise();
      const masteryData = await this.masteryService.getMasteryData(accountData.puuid).toPromise();

      const response = {
        username: accountData.gameName,
        tag: accountData.tagLine,
        level: summonerData.summonerLevel,
        profileIcon: summonerData.profileIconId,
        leagueData: leagueData,
        masteryData: masteryData
      };

      return response;
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }
}
