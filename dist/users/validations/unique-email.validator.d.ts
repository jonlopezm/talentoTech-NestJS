import { UsersService } from "../users.service";
import { ValidatorConstraintInterface } from "class-validator";
export declare class UniqueEmailValidator implements ValidatorConstraintInterface {
    private readonly userService;
    constructor(userService: UsersService);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
