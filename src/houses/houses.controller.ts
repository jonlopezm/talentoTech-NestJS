import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {House} from './houses.entity';
import {HousesService} from './houses.service';
import { CreateHouseDto } from './dto/create-house.dto';

@Controller('houses')
export class HousesController {

    constructor(private readonly housesService: HousesService) { }

    @Get()
    async findAll(): Promise<House[]> {
        return await this.housesService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id')id: string): Promise<House> {
        return await this.housesService.findOne(id);
    }
    @Post()
    async create(@Body() createHouseDto: CreateHouseDto): Promise<House> {
        return await this.housesService.create(createHouseDto);
    }
    @Put(':id')
    async update(@Param('id') id: string ,@Body() updateHouse: CreateHouseDto): Promise<House> {
        return await this.housesService.update(id,updateHouse);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Boolean> {
        return  this.housesService.delete(id);
    }
}

