// create-user.dto.ts
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterDto {
  @IsString()
  @IsNotEmpty({
    message: "user.validate.name.required",
  })
  name: string;

  @IsString()
  @IsNotEmpty({ message: "user.validate.password.required" })
  password: string;

  @IsString()
  @IsEmail({}, { message: "user.validate.email.invalid" })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  mobile?: string;
}
