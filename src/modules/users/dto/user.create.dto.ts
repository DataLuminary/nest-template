// create-user.dto.ts
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { UserStatus } from "@modules/users/types";

export class CreateUserDto {
  @IsString()
  @MinLength(1, { message: "姓名不能为空" })
  name: string;

  @IsString()
  @MinLength(1, { message: "用户唯一标识不能为空" })
  uid: string;

  @IsEmail({}, { message: "邮箱格式不正确" })
  @IsOptional()
  email?: string;

  @IsString()
  @MinLength(1, { message: "手机号格式不正确" })
  @IsOptional()
  mobile?: string;

  @IsString()
  @MinLength(8, { message: "密码长度至少为8个字符" })
  password: string;

  @IsString()
  @IsOptional()
  nickname?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsEnum(UserStatus, { message: "用户状态无效" })
  @IsOptional()
  status?: UserStatus = UserStatus.Active;
}
