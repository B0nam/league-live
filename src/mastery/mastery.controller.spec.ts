import { Test, TestingModule } from '@nestjs/testing';
import { MasteryController } from './mastery.controller';
import { MasteryService } from './mastery.service';

describe('MasteryController', () => {
  let controller: MasteryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasteryController],
      providers: [MasteryService],
    }).compile();

    controller = module.get<MasteryController>(MasteryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
