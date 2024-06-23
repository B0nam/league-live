import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestLog } from './entities/request-log.entity';
import { RequestLogService } from './request-log.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([RequestLog])],
  providers: [RequestLogService],
  exports: [TypeOrmModule, RequestLogService],
})
export class LoggerModule {}
