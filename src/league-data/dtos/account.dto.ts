export class AccountDto {
  puuid: string;
  gameName: string;
  tagLine: string;

  constructor(data: any) {
    this.puuid = data.puuid;
    this.gameName = data.gameName;
    this.tagLine = data.tagLine;
  }
}
