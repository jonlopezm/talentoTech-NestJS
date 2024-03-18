import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsEmail({}, { message: 'El correo no tiene uno formato válido' })  
    email: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}