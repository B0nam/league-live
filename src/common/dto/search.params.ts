import { IsString } from "class-validator";

export class SearchParams {
    @IsString()
    username: string;
    @IsString()
    tag: string;
}