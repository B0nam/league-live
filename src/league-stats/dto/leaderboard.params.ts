import { IsEnum, IsString } from "class-validator";
import { QueueType } from "../entity/queue-type.enum";
import { TierType } from "../entity/tier-type.enum";
import { DivisionType } from "../entity/division-type.enum";
import { ApiProperty } from "@nestjs/swagger";

export class LeaderboardParams {
  @ApiProperty()
  @IsString()
  @IsEnum(QueueType)
  queue: QueueType;

  @ApiProperty()
  @IsString()
  @IsEnum(TierType)
  tier: TierType;

  @ApiProperty()
  @IsString()
  @IsEnum(DivisionType)
  division: DivisionType;
}
