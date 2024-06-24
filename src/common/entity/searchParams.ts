import { IsString } from "class-validator";

export class searchParams {
    @IsString()
    username: string;
    @IsString()
    tag: string;
}