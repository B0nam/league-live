import { CreatePlayerDto } from './create-player.dto';
import { OmitType } from '@nestjs/swagger';

export class UpdatePlayerDto extends OmitType(CreatePlayerDto, ['detailsUrl', 'summonerId']) { }
