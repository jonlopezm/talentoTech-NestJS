import { AuthService } from './auth.service';
import { User } from 'src/users/users.entity';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<User>;
}
