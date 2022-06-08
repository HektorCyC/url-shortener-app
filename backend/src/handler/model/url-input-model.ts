
import { IsNotEmpty, IsString } from 'class-validator';

export class UrlInputModel {
    @IsNotEmpty()
    @IsString()
    longUrl: string;
}
