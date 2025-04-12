import { IsString, IsNotEmpty, IsBoolean, IsOptional } from "class-validator";

export class SpaceCreateDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  isTop?: boolean;

  @IsString()
  @IsOptional()
  logo?: string;
}
