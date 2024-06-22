import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { MasteryResponse } from './interfaces/mastery.interface';

@Injectable()
export class MasteryService {
  private readonly baseUrl = 'https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid';

  constructor(private readonly httpService: HttpService) {}

  getMasteryData(accountId: string): Observable<MasteryResponse[]> {
    const url = `${this.baseUrl}/${accountId}/top`;

    return this.httpService.get(url).pipe(
      map(response => response.data as MasteryResponse[]),
      catchError(error => {
        console.error('Erro ao obter dados de maestria:', error);
        return throwError(error);
      })
    );
  }
}