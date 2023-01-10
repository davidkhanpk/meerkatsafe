import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema()
export class UserModel {
    @Prop()
    id: string;

    @Prop()
    userId: string;
    
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    password: string;

    @Prop()
    role: number;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);