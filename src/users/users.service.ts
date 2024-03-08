import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bycrypt from 'bcryptjs';


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bycrypt.hash(createUserDto.password, 10);
        const createdUser = new this.userModel({
            ...createUserDto,
            password: hashedPassword
        });
        return createdUser.save();
    }

    async findAll(): Promise<User[]> {
        try {
            return await this.userModel.find().exec();
        } catch (error) {
            throw new NotFoundException('No se encontraron usuarios');
        }
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id);
    }

    async update(id: string, userDto: CreateUserDto): Promise<User> {
        if (userDto.password) {
            const hashedPassword = await bycrypt.hash(userDto.password, 10);
            userDto = {
                ...userDto,
                password: hashedPassword
            }
        }
        try {
            return await this.userModel.findByIdAndUpdate(id, { ...userDto }, { new: true });
        } catch (error) {
            throw new NotFoundException('No se encontró el usuario');
        }
    }

    async delete(id: string): Promise<Boolean> {
        try {
            const user = await this.userModel.findByIdAndDelete(id);
            if (!user) {
                throw new NotFoundException('No se encontró el usuario');
            }
            return true;
        } catch (error) {
            throw new NotFoundException('No se encontró el usuario');
        }
    }

    async findByEmail(email: string): Promise<User> {
        return this.userModel.findOne({email})
    }
                   
}
