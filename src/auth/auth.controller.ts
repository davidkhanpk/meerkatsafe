import { Controller, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";
import { User } from "src/user/interfaces/user.interface";
import { LocalAuthGurad } from "src/gaurds/local.guard";
@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {}

    @UseGuards(LocalAuthGurad)
    login(@Req() req: Request): {access_token: string} {
        return this.authService.login(req.user as User);
    }
}