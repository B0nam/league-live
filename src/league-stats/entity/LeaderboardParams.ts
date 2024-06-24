import { IsEnum, IsString } from "class-validator";
import { QueueType } from "./queue-type.enum";
import { TierType } from "./tier-type.enum";
import { DivisionType } from "./division-type.enum";

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
  