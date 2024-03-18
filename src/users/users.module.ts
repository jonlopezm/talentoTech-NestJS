import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema }  from './user.schema';
import { UniqueEmailValidator } from './validations/unique-email.validator';
import { AuthService } from 'src/auth/auth.service';
import { AuthController } from 'src/auth/auth.controller';


@Module({
imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UsersController, AuthController],
    providers: [UsersService, UniqueEmailValidator,AuthService],
})

export class UsersModule {    
}
