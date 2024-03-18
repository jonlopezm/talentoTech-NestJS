import { User } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly userService;
    constructor(userService: UsersService);
    validateUser(email: string, password: string): Promise<User>;
}
