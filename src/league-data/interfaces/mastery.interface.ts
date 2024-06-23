export interface MasteryDto {
  puuid: string;
  championId: number;
  championLevel: number;
  championPoints: number;
  lastPlayTime: number;
  championPointsSinceLastLevel: number;
  championPointsUntilNextLevel: number;
  markRequiredForNextLevel: number;
  tokensEarned: number;
  championSeasonMilestone: number;
  nextSeasonMilestone: {
    requireGradeCounts: {
      [grade: string]: number;
    };
    rewardMarks: number;
    bonus: boolean;
    rewardConfig: {
      rewardValue: string;
      rewardType: string;
      maximumReward: number;
    };
  };
}
