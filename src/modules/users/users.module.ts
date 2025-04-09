import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { userProviders } from "@modules/users/user.providers";

@Module({
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
})
export class UsersModule {}
