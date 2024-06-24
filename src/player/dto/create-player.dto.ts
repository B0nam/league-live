import { ApiProperty } from "@nestjs/swagger";

export class CreatePlayerDto {
    @ApiProperty()
    summonerId: string;
    
    @ApiProperty()
    queueType: string;
    
    @ApiProperty()
    tier: string;
    
    @ApiProperty()
    rank: string;
    
    @ApiProperty()
    leaguePoints: number;
    
    @ApiProperty()
    wins: number;
    
    @ApiProperty()
    losses: number;
    
    @ApiProperty()
    hotStreak: boolean;
    
    @ApiProperty()
    veteran: boolean;
    
    @ApiProperty()
    freshBlood: boolean;
    
    @ApiProperty()
    inactive: boolean;
    
    @ApiProperty()
    detailsUrl?: string;
}
