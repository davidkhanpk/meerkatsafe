import { Injectable } from '@nestjs/common';
import { Device } from './interfaces/device.interface';
import { DeviceModel, DeviceDocument } from './device.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateDeviceDto } from './dto/createDevice.dto'
import { Model } from 'mongoose';

@Injectable()
export class DeviceService {
  constructor(@InjectModel(DeviceModel.name) private deviceModel: Model<DeviceDocument>) {}

  create(device: Device) {
    const createdCat = new this.deviceModel(CreateDeviceDto);
    return createdCat.save();
  }
}