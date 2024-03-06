import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Employe } from "./employe.model";
import { CreateEmployeDto } from "./employe.dto";

@Injectable()
export class EmployeService {
    constructor(@InjectModel(Employe.name) private readonly employeModel: Model<Employe>) {} 

    async findAll(): Promise<Employe[]> {
        return this.employeModel.find().populate('userId').exec()
    }
    async findOne(id: string): Promise<Employe> {
        return this.employeModel.findById(id).populate('userId').exec();
    }
    async create(createEmployeDto: CreateEmployeDto) {
        const createdEmploye = new this.employeModel(createEmployeDto);
        createdEmploye.userId = new Types.ObjectId(createEmployeDto.userId);
        await createdEmploye.save();
        return createdEmploye;
    }
    async update(id: string, employe: Employe): Promise<Employe> {
        return this.employeModel.findByIdAndUpdate(id, employe, { new: true }).exec();
    }
    
    async delete(id: string): Promise<Employe> {
        return this.employeModel.findByIdAndDelete(id).exec();
    }

}