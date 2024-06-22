import { Module } from '@nestjs/common';
import { MasteryService } from './mastery.service';
import { MasteryController } from './mastery.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [MasteryController],
  providers: [MasteryService],
})
export class MasteryModule {}
