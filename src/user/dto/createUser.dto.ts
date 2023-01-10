import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly id: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly email: string;
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly phone: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly password: string;

    @IsNumber()
    @MaxLength(30)
    @IsNotEmpty()
    readonly role: number;
}