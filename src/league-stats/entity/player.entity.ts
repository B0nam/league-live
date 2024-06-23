import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  summonerId: string;

  @Column()
  queueType: string;

  @Column()
  tier: string;

  @Column()
  rank: string;

  @Column()
  leaguePoints: number;

  @Column()
  wins: number;

  @Column()
  losses: number;

  @Column({ default: false })
  hotStreak: boolean;

  @Column({ default: false })
  veteran: boolean;

  @Column({ default: false })
  freshBlood: boolean;

  @Column({ default: false })
  inactive: boolean;

  @Column()
  detailsUrl: string;
}
