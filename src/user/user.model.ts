import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({ required: true , type : String })
    firstname: string;

    @Prop({ required: true , type : String })
    lastname: string;

    @Prop( {type :String})
    email: string;

    @Prop({ required: true  , type : Number  })
    phoneNumber: number;
}

export const UserModel = SchemaFactory.createForClass(User);
