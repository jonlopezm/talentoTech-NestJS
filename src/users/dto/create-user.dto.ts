import { IsEmail, IsNotEmpty, IsNumber, IsString, Matches, MinLength, Validate } from "class-validator";
import { UniqueEmailValidator } from "../validations/unique-email.validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: string;
    @IsNotEmpty()
    @IsString({message:'El nombre debe ser un texto'})
    @MinLength(3, { message: 'El nombre debe tener minimo 3 letras' })
    readonly name: string;
    readonly lastName: string;
    @Validate(UniqueEmailValidator, { message: 'El correo ya fue registrado' })
    @IsNotEmpty()
    @IsEmail({}, { message: 'El correo no tiene uno formato válido' })
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    @Matches(/^[^s@]+@[^s@]+.[^s@]+$/,{message:'La contraseña debe tener al menos 8 Caracteres'})
    readonly password: string;
    readonly avatar: string;
}