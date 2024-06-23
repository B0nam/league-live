import { Injectable } from '@nestjs/common';
import { LeagueDataService } from 'src/league-data/league-data.service';
import * as fs from 'fs';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './entity/player.entity';

@Injectable()
export class LeagueStatsService {
  constructor(
    private readonly leagueDataService: LeagueDataService,
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async getPlayerView(username: string, tag: string): Promise<any> {
    try {
      const player = await this.leagueDataService.getPlayerData(username, tag);
      const filePath = path.resolve(
        __dirname,
        '../../src/league-stats/public/league-stats.html',
      );
      let html = fs.readFileSync(filePath, 'utf8');

      html += `
                <script>
                    const playerData = ${JSON.stringify(player)};
                    setPlayerData(playerData);
                </script>
            `;

      return html;
    } catch (error) {
      throw new Error(`Erro ao obter view do jogador: ${error.message}`);
    }
  }

  async getLeaderboard(queue: string, tier: string, division: string) {
    const searchCriteria = { queueType: queue, tier: tier, rank: division };
    const leaderboardAlreadyGot = this.playerRepository.exists({
      where: searchCriteria,
    });

    const leaderboard = !leaderboardAlreadyGot
      ? this.leagueDataService.getTopTwoHundred(queue, tier, division)
      : this.playerRepository.find({ where: searchCriteria, take: 200 });

    return leaderboard;
  }
}
