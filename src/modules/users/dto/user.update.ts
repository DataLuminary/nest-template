// update-user.dto.ts
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";
import { UserStatus } from "@modules/users/types";

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  uid?: string; // 注意：修改 uid 可能涉及业务逻辑，需谨慎处理

  @IsEmail({}, { message: "邮箱格式不正确" })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  mobile?: string;

  @IsString()
  @MinLength(8, { message: "密码长度至少为8个字符" })
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  nickname?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsEnum(UserStatus, { message: "用户状态无效" })
  @IsOptional()
  status?: UserStatus;
}
