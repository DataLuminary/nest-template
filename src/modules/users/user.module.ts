import { UserEntity } from "@modules/users/entities/user.entity";
import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UserController } from "@modules/users/user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UserModule {}
