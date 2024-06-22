import { MasteryDto } from '../interfaces/mastery.interface';
import { AccountDto } from './account.dto';
import { LeagueEntryDto } from './league-entry.dto';

export class PlayerDto {
  username: string;
  tag: string;
  level: string;
  profileIcon: string;
  leagueData: LeagueEntryDto[];
  masteryData: MasteryDto[];

  constructor(
    accountDto: AccountDto,
    summonerDto: SummonerDto,
    leagueDto: LeagueEntryDto[],
    masteryDto: MasteryDto[],
  ) {
    this.username = accountDto.gameName;
    this.tag = accountDto.tagLine;
    this.level = summonerDto.summonerLevel;
    this.profileIcon = summonerDto.profileIconId;
    this.leagueData = leagueDto;
    this.masteryData = masteryDto;
  }
}
