import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.usersService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id')id: string): Promise<User> {
        return await this.usersService.findOne(id);
    }
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.usersService.create(createUserDto);
    }
    @Put(':id')
    async update(@Param('id') id: string ,@Body() updateUser: CreateUserDto): Promise<User> {
        return await this.usersService.update(id,updateUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Boolean> {
        return  this.usersService.delete(id);
    }

}
