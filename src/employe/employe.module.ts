import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employe , EmployeModel } from './employe.model';
import { EmployeController } from './employe.controller';
import { EmployeService } from './employe.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Employe.name, schema: EmployeModel }])],
    controllers: [EmployeController],
    providers: [EmployeService],
  })
  export class EmployeModule {}