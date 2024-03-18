import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { House } from './houses.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateHouseDto } from './dto/create-house.dto';

@Injectable()
export class HousesService {

    constructor(@InjectModel('House') private readonly houseModel: Model<House>) { }

    async create(createHouseDto: CreateHouseDto): Promise<House> {
        const createdHouse = new this.houseModel(createHouseDto);
        return createdHouse.save();
    }

    async findAll(): Promise<House[]> {
        return await this.houseModel.find().exec();
    }

    async findOne(id: string): Promise<House> {
        try {
            return await this.houseModel.findById(id);
        } catch (error) {
            throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
        }
    }

    async update(id: string, houseDto: CreateHouseDto): Promise<House> {
        try {
            return await this.houseModel.findByIdAndUpdate(id, { ...houseDto }, { new: true });
        } catch (error) {
            throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
        }
    }

    async delete(id: string): Promise<Boolean> {
        try {
            const house = await this.houseModel.findByIdAndDelete(id);
            if (!house) {
                throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
            }
            return true;
        } catch (error) {
            throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
        }
    }

    async findByCode(code: string): Promise<House> {
        return this.houseModel.where({ code }).findOne();
    }


}