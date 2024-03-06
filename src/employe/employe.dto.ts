// employe.dto.ts
import { IsNotEmpty, IsString,  } from 'class-validator';
import { Types } from 'mongoose';

export class CreateEmployeDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    userId: Types.ObjectId;

    @IsNotEmpty()
    @IsString()
    enterpriseName: string;

    @IsNotEmpty()
    @IsString()
    address: string;
}
