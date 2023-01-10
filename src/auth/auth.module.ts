import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt/dist";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "src/strategies/jwt.strategy";
import { LocalStrategy } from "src/strategies/local.strategy";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1d'}
        })
    ],
    providers: [AuthService, JwtStrategy, LocalStrategy ],
    controllers: [AuthController]

})

export class AuthModule {}