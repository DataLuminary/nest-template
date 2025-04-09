import { IsEmail, IsEnum, IsString } from "class-validator";
import { UserStatus } from "@modules/users/types";

export class UserDto {
  id: bigint;

  @IsString()
  name: string;

  @IsString()
  uid: string;

  @IsEmail()
  email?: string;

  @IsString()
  mobile?: string;

  @IsString()
  nickname?: string;

  @IsString()
  avatar?: string;

  @IsEnum(UserStatus)
  status: UserStatus;
}
