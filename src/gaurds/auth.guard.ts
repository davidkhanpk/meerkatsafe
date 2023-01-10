import { ExecutionContext } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport'

export class ApiGuard extends AuthGuard('jwt') {
    getRequest(context: ExecutionContext): any {
        return context.switchToHttp().getRequest()
    }
}