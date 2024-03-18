import { Injectable } from "@nestjs/common";
import { UsersService } from "../users.service";
import { ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

//@ValidatorConstraint({ name: 'uniqueEmail', async: true })
@Injectable()
export class UniqueEmailValidator implements ValidatorConstraintInterface{
    constructor(private readonly userService: UsersService) { }
    async validate(email: string): Promise<boolean> {
        const user = await this.userService.findByEmail(email);
        if(!user){
            return false;
        }
        return true;
    }
    defaultMessage(): string {
        return 'El correo ya fue registrado';
    }
}