// create-user.dto.ts
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { UserStatus } from "@modules/users/types";

export class UserDto {
  @IsString()
  @IsNotEmpty({
    message: "user.validate.name.required",
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: "user.validate.email.required",
  })
  @IsEmail({}, { message: "user.validate.email.invalid" })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  mobile?: string;

  @IsString()
  @IsNotEmpty({ message: "user.validate.password.required" })
  @MinLength(8, { message: "user.validate.password.required" })
  password: string;

  @IsString()
  @IsOptional()
  nickname?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsEnum(UserStatus, { message: "user.validate.status.enum" })
  @IsOptional()
  status?: UserStatus = UserStatus.Active;
}
