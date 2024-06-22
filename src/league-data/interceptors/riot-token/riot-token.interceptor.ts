import { HttpService } from '@nestjs/axios';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import { Observable } from 'rxjs';

configDotenv({path: "./../.env"})

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
