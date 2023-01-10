import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<DeviceModel>;

@Schema()
export class DeviceModel {
    @Prop()
    id: string;

    @Prop()
    deviceName: string;

    @Prop()
    alertSkipInterval: string;

    @Prop()
    healthDeviceInterval: boolean;
}

export const DeviceSchema = SchemaFactory.createForClass(DeviceModel);