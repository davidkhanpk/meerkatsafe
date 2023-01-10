import { AuthGuard } from '@nestjs/passport'

export class LocalAuthGurad extends AuthGuard('jwt') {}