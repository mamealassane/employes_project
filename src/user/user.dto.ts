import { IsString, IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    readonly firstname: string;

    @IsNotEmpty()
    @IsString()
    readonly lastname: string;

    @IsOptional()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsNumber()
    readonly phoneNumber: number;
}
