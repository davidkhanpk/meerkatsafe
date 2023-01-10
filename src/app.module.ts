import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceModule } from './device/device.module';
import { UserModule } from './user/user.module';
import { DummyController } from './dummy/dummy.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://meerkatsafe:meerkatsafe@meerkatsafe.jtspr4c.mongodb.net/?retryWrites=true&w=majority'), DeviceModule, UserModule],
  controllers: [AppController, DummyController],
  providers: [AppService],
})
export class AppModule {}
