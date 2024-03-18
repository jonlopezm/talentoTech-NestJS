import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import * as bycrypt from 'bcryptjs';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async validateUser(email: string, password: string): Promise<User> {
        try {
            const user = await this.userService.findByEmail(email);
            if (user && bycrypt.compareSync(password, user.password)) {
                const result = user;
                return result;
            } else {
                throw new HttpException('NotFound', HttpStatus.FORBIDDEN);
            }
        } catch (error) {
            throw new HttpException('NotFound', HttpStatus.FORBIDDEN);
        }
    }
}
