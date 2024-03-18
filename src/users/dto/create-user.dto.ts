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
    @IsNotEmpty()
    @IsEmail({}, { message: 'El correo no tiene uno formato válido' })
    @Validate(UniqueEmailValidator, { message: 'El correo ya fue registrado' })
    readonly email: string;
    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,{message:'La contraseña debe tener al menos 8 Caracteres, como mínimo una letra mayúscula, una letra minúscula, un número y un carácter especial'})
    readonly password: string;
    @IsNotEmpty()
    readonly avatar: string;
}