import { UserEntity } from "@modules/users/entities/user.entity";
import { Module } from "@nestjs/common";
import { AuthService } from "src/modules/auth/auth.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [AuthService],
  exports: [AuthService],
})
export class UsersModule {}
