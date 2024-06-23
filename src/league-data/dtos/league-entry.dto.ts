export class LeagueEntryDto {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;

  constructor(data: any) {
    this.leagueId = data.leagueId;
    this.queueType = data.queueType;
    this.tier = data.tier;
    this.rank = data.rank;
    this.summonerId = data.summonerId;
    this.leaguePoints = data.leaguePoints;
    this.wins = data.wins;
    this.losses = data.losses;
    this.veteran = data.veteran;
    this.inactive = data.inactive;
    this.freshBlood = data.freshBlood;
    this.hotStreak = data.hotStreak;
  }
}
