import { UserEntity } from "@modules/users/entities/user.entity";
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthController } from "src/modules/users/auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController],
  providers: [UsersService],
  exports: [UsersService],
})
export class AuthModule {}
