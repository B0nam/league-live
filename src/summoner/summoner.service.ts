import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, map } from 'rxjs';
import { SummonerResponse } from './interfaces/summoner.interface';

@Injectable()
export class SummonerService {
  private readonly baseUrl = 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid';

  constructor(private httpService: HttpService) {}

  getSummonerData(accountId: string): Observable<SummonerResponse> {
    const url = `${this.baseUrl}/${accountId}`;

    return this.httpService.get(url).pipe(
      map((response: AxiosResponse) => this.mapToSummonerResponse(response.data)),
      catchError((e) => {
        throw new HttpException(e.response.data, e.response.status);
      }),
    );
  }

  private mapToSummonerResponse(data: any): SummonerResponse {
    return {
      id: data.id,
      accountId: data.accountId,
      puuid: data.puuid,
      profileIconId: data.profileIconId,
      revisionDate: data.revisionDate,
      summonerLevel: data.summonerLevel,
    };
  }
}
