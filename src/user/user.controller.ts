import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class UserController {
  @Post('Login')
  login(@Req() req: Request): string {
    console.log(req);
    return 'This action returns all cats';
  }
}