import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModel, UserSchema } from './user.entity';
import { UserRepository } from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService, UserRepository],
  exports: [UserService]
})

export class UserModule {}