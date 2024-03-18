import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HousesModule } from './houses/houses.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [HousesModule, UsersModule,MongooseModule.forRoot(process.env.DB_URL)],
  controllers: [AppController],
  providers: [AppService,]
})
export class AppModule { }
