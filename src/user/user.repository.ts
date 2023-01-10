import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UserModel, UserDocument } from './user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base.repository';

@Injectable()
export class UserRepository extends BaseRepository<UserDocument> {
    constructor(@InjectModel(UserModel.name) userModel: Model<UserDocument>) {
        super(userModel)
    }
}