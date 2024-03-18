import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHouseDto {
    @IsNotEmpty()
    @IsString()
    readonly address: string;
    @IsNotEmpty()
    @IsString()
    readonly city: string;
    @IsNotEmpty()
    @IsString()
    readonly state: string;
    @IsNotEmpty()
    @IsNumber()
    readonly size: number;
    @IsNotEmpty()
    @IsString()
    readonly type: string;
    @IsNotEmpty()
    @IsString()
    readonly zipCode: string;
    @IsNotEmpty()
    @IsNumber()
    readonly rooms: number;
    @IsNotEmpty()
    @IsNumber()
    readonly bathrooms: number;
    @IsNotEmpty()
    @IsBoolean()
    readonly parking: boolean;
    @IsNotEmpty()
    @IsNumber()
    readonly price: number;
    @IsNotEmpty()
    @IsString()
    readonly code: string;
    @IsNotEmpty()
    @IsString()
    readonly image: string;
}