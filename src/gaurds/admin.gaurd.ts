import { Injectable } from "@nestjs/common";
import { CanActivate, ExecutionContext } from "@nestjs/common/interfaces";
import { Logger } from "@nestjs/common/services";
import { Observable } from "rxjs";

@Injectable()
export class AdminGuard implements CanActivate {

    private readonly logger = new Logger(AdminGuard.name)
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        if(request.user.idAdmin) {
            return true;
        }
        return false;
    }
}