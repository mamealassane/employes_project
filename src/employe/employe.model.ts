import { Prop , SchemaFactory , Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "src/user/user.model";
@Schema()
export class Employe extends Document {
    @Prop({ required: true , type :String})
    title: string;

    @Prop({ type: Types.ObjectId , ref :"User",  required: true , index : true})
    userId: Types.ObjectId;

    @Prop({ required: true, type :String, })
    enterpriseName: string;

    @Prop({ required: true  , type :String})
    address: string;
}
export const EmployeModel = SchemaFactory.createForClass(Employe);