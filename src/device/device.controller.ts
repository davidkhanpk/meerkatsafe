import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class DeviceController {
  @Post('GetLicenseInformation')
  getLicenseInformation(@Req() req: Request): string {
    console.log(req);
    return 'This action returns all cats';
  }

  @Post('GetDeviceSettings')
  getDeviceInformation(@Req() req: Request): string {
    console.log(req)
    return 'This action returns all cats';
  }
}