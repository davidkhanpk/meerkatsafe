import { Injectable } from '@nestjs/common';
import { Device } from './interfaces/device.interface';
import { DeviceModel, DeviceDocument } from './device.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DeviceRepository {
    constructor(@InjectModel(DeviceModel.name) private deviceModel: Model<DeviceDocument>) {}
}