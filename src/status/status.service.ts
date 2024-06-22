import { HttpService } from '@nestjs/axios';
import { HttpException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, catchError, map } from 'rxjs';

@Injectable()
export class StatusService {
    private readonly baseUrl = 'https://br1.api.riotgames.com/lol/status/v4/platform-data';

    constructor(private httpService: HttpService) { }

    getRiotApiStatus(): Observable<any> {
        return this.httpService
            .get(this.baseUrl)
            .pipe(
                map((response: AxiosResponse) => response.data),
                catchError((e) => {
                    throw new HttpException(e.response.data, e.response.status);
                }),
            );
    }
}