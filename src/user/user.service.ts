import { Injectable } from '@nestjs/common';
import { UserModel, UserDocument } from './user.entity';
import { FilterQuery, Model } from 'mongoose';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository){}

  findOne(query: FilterQuery<UserModel>): Promise<UserModel> {
    return  this.userRepository.findOne(query);
  }
}