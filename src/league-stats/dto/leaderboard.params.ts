import { IsEnum, IsString } from "class-validator";
import { QueueType } from "../entity/queue-type.enum";
import { TierType } from "../entity/tier-type.enum";
import { DivisionType } from "../entity/division-type.enum";

export class LeaderboardParams {
  @IsString()
  @IsEnum(QueueType)
  queue: QueueType;

  @IsString()
  @IsEnum(TierType)
  tier: TierType;

  @IsString()
  @IsEnum(DivisionType)
  division: DivisionType;
}
