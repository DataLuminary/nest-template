import { Public } from "@modules/auth/decorators/public.decorator";
import type { LoginDto } from "@modules/auth/dto/login.dto";
import type { RegisterDto } from "@modules/auth/dto/register.dto";
import type { JwtPayload } from "@modules/auth/types";
import { Controller, Post, Body, Request, Get } from "@nestjs/common";
import { AuthService } from "src/modules/auth/auth.service";
import { CurrentUser } from "./decorators/current-user.decorator";

@Controller("auth")
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Public()
  @Post("login")
  async login(@Body() { username, password }: LoginDto) {
    return this.service.login({ username, password });
  }

  @Public()
  @Post("register")
  async register(@Body() body: RegisterDto) {
    return this.service.register(body);
  }

  // @Post("refresh")
  // @HttpCode(200)
  // async refresh(@Body() body: { refresh_token: string }) {
  //   return this.authService.refreshToken(body.refresh_token);
  // }

  @Get("profile")
  getProfile(@Request() req, @CurrentUser() user: JwtPayload) {
    console.log(user);
    console.log(req);
    return req.user;
  }
}
