import { MasteryDto } from './mastery.dto';
import { AccountDto } from './account.dto';
import { LeagueEntryDto } from './league-entry.dto';
import { SummonerDto } from './summoner.dto';

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
