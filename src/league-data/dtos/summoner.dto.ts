export class SummonerDto {
    id: string;
    accountId: string;
    puuid: string;
    profileIconId: string;
    revisionDate: string;
    summonerLevel: string;

    constructor(responseContent: any) {
        this.id = responseContent.id;
        this.accountId = responseContent.accountId;
        this.puuid = responseContent.puuid;
        this.profileIconId = responseContent.profileIconId;
        this.revisionDate = responseContent.revisionDate;
        this.summonerLevel = responseContent.summonerLevel;
    }
}