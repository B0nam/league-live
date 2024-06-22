import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, map } from 'rxjs';
import { LeagueResponse } from './interfaces/league.interface';

@Injectable()
export class LeagueService {
  private readonly baseUrl = 'https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner';

  constructor(private httpService: HttpService) {}

  getLeagueData(summonerId: string): Observable<LeagueResponse[]> {
    const url = `${this.baseUrl}/${summonerId}`;

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

  private mapToLeagueEntries(data: any): LeagueResponse[] {
    if (Array.isArray(data)) {
      return data.map(entry => ({
        leagueId: entry.leagueId,
        queueType: entry.queueType,
        tier: entry.tier,
        rank: entry.rank,
        summonerId: entry.summonerId,
        leaguePoints: entry.leaguePoints,
        wins: entry.wins,
        losses: entry.losses,
        veteran: entry.veteran,
        inactive: entry.inactive,
        freshBlood: entry.freshBlood,
        hotStreak: entry.hotStreak,
      }));
    } else {
      return [];
    }
  }
}