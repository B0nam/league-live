import { Injectable } from '@nestjs/common';
import { LeagueDataService } from 'src/league-data/league-data.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LeagueStatsService {
    constructor(private readonly leagueDataService: LeagueDataService) { }

    async getPlayerView(username: string, tag: string): Promise<any> {
        try {
            const player = await this.leagueDataService.getPlayerData(username, tag);
            const filePath = path.resolve(__dirname, '../../src/league-stats/public/league-stats.html');
            let html = fs.readFileSync(filePath, 'utf8');

            html += `
                <script>
                    setPlayerData('${player.username}',
                                  '${player.tag}',
                                  '${player.rank}',
                                  '${player.wins}',
                                  '${player.losses}');
                </script>
            `;

            return html;

        } catch (error) {
            throw new Error(`Erro ao obter view do jogador: ${error.message}`);
        }
    }
}
