import { IsString } from "class-validator";
import { QueueType } from "./queue-type.enum";
import { TierType } from "./tier-type.enum";
import { DivisionType } from "./division-type.enum";

export class LeaderboardParams {
    @IsString()
    queue: QueueType;
  
    @IsString()
    tier: TierType;
  
    @IsString()
    division: DivisionType;
  }
  