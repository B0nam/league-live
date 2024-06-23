import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RequestLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  route: string;

  @Column()
  method: string;

  @Column()
  httpStatus: string;

  @Column('decimal')
  responseTime: number;
}
