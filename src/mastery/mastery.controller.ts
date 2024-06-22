import { Controller, Get, Param } from '@nestjs/common';
import { MasteryService } from './mastery.service';
import { MasteryResponse } from './interfaces/mastery.interface';

@Controller('mastery')
export class MasteryController {
  constructor(private readonly masteryService: MasteryService) {}

  @Get('data/:accountId')
  async getMasteryData(@Param('accountId') accountId: string): Promise<MasteryResponse[]> {
    try {
      return await this.masteryService.getMasteryData(accountId).toPromise();
    } catch (error) {
      throw new Error(`Erro ao obter dados de maestria: ${error.message}`);
    }
  }
}