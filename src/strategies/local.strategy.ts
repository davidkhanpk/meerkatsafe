import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport'
import {Strategy} from 'passport-local'
import { AuthService } from "src/auth/auth.service";
import { User } from "src/user/interfaces/user.interface";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({usernameField: 'email'})
    }

    async validate(email: string, password: string): Promise<User> {
        const user = this.authService.validate(email, password);
        if(!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}