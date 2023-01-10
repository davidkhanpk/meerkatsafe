import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceController } from './device.controller';
import { DeviceService } from './device.service';
import { DeviceModel, DeviceSchema } from './device.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: DeviceModel.name, schema: DeviceSchema }])],
  controllers: [DeviceController],
  providers: [DeviceService],
})

export class DeviceModule {}