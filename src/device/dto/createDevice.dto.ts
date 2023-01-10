import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateDeviceDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly id: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly deviceName: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly alertSkipInterval: string;

    @IsNumber()
    @IsNotEmpty()
    readonly healthDeviceInterval: boolean;
}