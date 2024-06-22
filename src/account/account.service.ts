import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { response } from 'express';
import { Observable, catchError, map } from 'rxjs';
import { AccountResponse } from './interfaces/accont.interface';

@Injectable()
export class AccountService {
    private readonly baseUrl = 'https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id'

    constructor(private httpService: HttpService) { }

    getAccountData(username: string, tag: string): Observable<AccountResponse> {
        const usernameFormated = encodeURIComponent(username.trim());
        const url = `${this.baseUrl}/${usernameFormated}/${tag}`;

        return this.httpService.get(url).pipe(
            map((response: AxiosResponse) => this.mapToAccountResponse(response.data)),
            catchError((e) => {
                throw new HttpException(e.response.data, e.response.status);
            }),
        );
    }

    private mapToAccountResponse(data: any): AccountResponse {
        return {
            puuid: data.puuid,
            gameName: data.gameName,
            tagLine: data.tagLine,
        };
    }
}