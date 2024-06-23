import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { MasteryDto } from './interfaces/mastery.interface';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AxiosResponse } from 'axios';
import { AccountDto } from './dtos/account.dto';
import { PlayerDto } from './dtos/player.dto';
import { LeagueEntryDto } from './dtos/league-entry.dto';
import { SummonerDto } from './dtos/summoner.dto';

@Injectable()
export class LeagueDataService {
  private readonly lolBaseUrl = 'https://br1.api.riotgames.com/lol';
  private readonly riotBaseUrl = 'https://americas.api.riotgames.com/riot';
  constructor(private readonly httpService: HttpService) {}

  getMasteryData(accountId: string): Observable<MasteryDto[]> {
    const url = `${this.lolBaseUrl}/champion-mastery/v4/champion-masteries/by-puuid/${accountId}/top`;

    return this.httpService.get(url).pipe(
      map((response) => response.data as MasteryDto[]),
      catchError((error) => {
        console.error('Erro ao obter dados de maestria:', error);
        return throwError(error);
      }),
    );
  }

  getSummonerData(accountId: string): Observable<SummonerDto> {
    const url = `${this.lolBaseUrl}/summoner/v4/summoners/by-puuid/${accountId}`;

    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => new SummonerDto(response.data)),
      catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  getRiotApiStatus(): Observable<any> {
    return this.httpService
      .get(`${this.lolBaseUrl}/status/v4/platform-data`)
      .pipe(
        map((response: AxiosResponse) => response.data),
        catchError((e) => {
          throw new HttpException(e.response.data, e.response.status);
        }),
      );
  }

  getAccountData(username: string, tag: string): Observable<AccountDto> {
    const usernameFormated = encodeURIComponent(username.trim());
    const url = `${this.riotBaseUrl}/account/v1/accounts/by-riot-id/${usernameFormated}/${tag}`;

    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => new AccountDto(response.data)),
      catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  getLeagueData(summonerId: string): Observable<LeagueEntryDto[]> {
    const url = `${this.lolBaseUrl}/league/v4/entries/by-summoner/${summonerId}`;

    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => this.mapToLeagueEntries(response.data)),
      catchError((e) => {
        if (e.response && e.response.status) {
          throw new HttpException(e.response.data, e.response.status);
        } else {
          throw new HttpException('Erro ao obter dados da liga', 500);
        }
      }),
    );
  }

  private mapToLeagueEntries(data: any): LeagueEntryDto[] {
    return Array.isArray(data)
      ? data.map((entry) => new LeagueEntryDto(entry))
      : [];
  }

  async getPlayerData(username: string, tag: string): Promise<any> {
    try {
      const accountData = await this.getAccountData(username, tag).toPromise();
      const summonerData = await this.getSummonerData(
        accountData.puuid,
      ).toPromise();
      const leagueData = await this.getLeagueData(summonerData.id).toPromise();
      const masteryData = await this.getMasteryData(
        accountData.puuid,
      ).toPromise();

      return new PlayerDto(accountData, summonerData, leagueData, masteryData);
    } catch (error) {
      throw new Error(`Erro ao obter dados do jogador: ${error.message}`);
    }
  }

  async getTopTwoHundred(
    queue: string,
    tier: string,
    division: string,
  ): Promise<any> {
    try {
      const url = `${this.lolBaseUrl}/league-exp/v4/entries/${queue}/${tier}/${division}`;
      return this.httpService.get(url).pipe(
        map((response: AxiosResponse) => {
          console.log(response.data.length);
          return response.data;
        }),
      );
    } catch {}
  }
}
