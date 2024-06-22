import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { Observable } from 'rxjs';

const envPath = path.resolve(__dirname, '../../../../.env');
dotenv.config({ path: envPath });

@Injectable()
export class RiotTokenInterceptor implements NestInterceptor {
  constructor(private httpService: HttpService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    this.httpService.axiosRef.defaults.headers.common['X-Riot-Token'] = process.env.RIOT_KEY;
    console.log(`[+] Riot API Call. - ${request.url}`)

    return next.handle();
  }
}
