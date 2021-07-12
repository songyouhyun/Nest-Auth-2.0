import { Controller, UseGuards, Request, Post} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
    // JWT를 생성하고 리턴하는 코드
    return this.authService.login(req.user);
    }
}