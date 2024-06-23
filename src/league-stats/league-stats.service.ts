import { Injectable } from '@nestjs/common';
import { LeagueDataService } from 'src/league-data/league-data.service';
import * as fs from 'fs';
import * as path from 'path';
import puppeteer from 'puppeteer';

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
                    const playerData = ${JSON.stringify(player)};
                    setPlayerData(playerData);
                </script>
            `;

            return html;

        } catch (error) {
            throw new Error(`Erro ao obter view do jogador: ${error.message}`);
        }
    }


  async exportPlayerView(username: string, tag: string): Promise<string> {
    try {
      const html = await this.getPlayerView(username, tag)
      const exportPath = path.resolve(__dirname, '../../src/league-stats/export');
      const imagePath = path.join(exportPath, `${username}_${tag}.jpeg`);

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      await page.screenshot({ path: imagePath, type: 'jpeg' });
      await browser.close();

      return imagePath;

    } catch (error) {
      throw new Error(`Erro ao exportar a view do jogador: ${error.message}`);
    }
  }
}
