import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RequestLog } from './entities/request-log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RequestLogService {
  constructor(
    @InjectRepository(RequestLog)
    private readonly requestLogRepository: Repository<RequestLog>,
  ) {}

  async create(log: Partial<RequestLog>): Promise<RequestLog> {
    return this.requestLogRepository.save(log);
  }
}
