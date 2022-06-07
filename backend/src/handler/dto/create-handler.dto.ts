import { IsNotEmpty } from 'class-validator';

export class CreateHandlerDto {
    @IsNotEmpty()
    url: string;
}
