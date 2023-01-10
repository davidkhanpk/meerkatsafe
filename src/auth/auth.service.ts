import { JwtService } from "@nestjs/jwt";
import { User } from "src/user/interfaces/user.interface";
import { UserModel } from "src/user/user.entity";
import { UserService } from "src/user/user.service";

export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService ) {}

    async validate(email: string, password: string): Promise<UserModel> | null {
        const user = await this.userService.findOne({email});

        if(!user) {
            return null;
        }

        const passwordIsValid = password === user.password;
        return passwordIsValid ? user : null
        
    }

    login(user: User): { access_token: string } {
        const payload = {
            email: user.email,
            userId: user.userId
        }

        return {
            access_token: this.jwtService.sign(payload)
        }
    }

    async verify(token: string): Promise<User> {
        const decode = this.jwtService.verify(token, {
            secret: process.env.JWT_SECRET
        })

        const user = await this.userService.findOne(decode);

        if(!user) {
            throw new Error('Unable to decode token')
        }

        return user;
    }
}