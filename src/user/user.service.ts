import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./user.model";
import { CreateUserDto } from "./user.dto";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {} 

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec()
    }

    async findOne(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
    
    async delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
