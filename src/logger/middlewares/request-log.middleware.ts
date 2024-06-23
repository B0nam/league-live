import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { RequestLogService } from '../request-log.service';

@Injectable()
export class RequestLogMiddleware implements NestMiddleware {
  constructor(private readonly requestLogService: RequestLogService) {}

  async use(req: Request, res: Response, next: (error?: any) => void) {
    const startTime = Date.now();

    res.on('finish', async () => {
      const finishTime = Date.now();
      const responseTime = finishTime - startTime;
      const requestLog = {
        route: req.originalUrl,
        method: req.method,
        httpStatus: res.statusCode + '-' + res.statusMessage,
        responseTime,
      };
      await this.requestLogService.create(requestLog);
    });

    next();
  }
}
