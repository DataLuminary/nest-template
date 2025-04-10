// create-user.dto.ts
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class LoginDto {
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
}
