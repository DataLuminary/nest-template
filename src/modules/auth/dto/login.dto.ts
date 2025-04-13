// create-user.dto.ts
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @ApiProperty({ example: "admin", description: "username" })
  @IsString()
  @IsNotEmpty({ message: "user.validate.name.required" })
  username: string;

  @ApiProperty({ example: "123456", description: "password" })
  @IsString()
  @IsNotEmpty({ message: "user.validate.password.required" })
  password: string;
}
