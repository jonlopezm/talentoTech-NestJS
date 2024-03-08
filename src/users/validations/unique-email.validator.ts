import { Injectable } from "@nestjs/common";
import e from "express";
import { UsersService } from "../users.service";

@Injectable()
export class UniqueEmailValidator {
    constructor(private readonly userService: UsersService) { }
    async validate(email: string): Promise<boolean> {
        const user = await this.userService.findByEmail(email);
        if(!user){
            return false;
        }
        return true;
    }
}