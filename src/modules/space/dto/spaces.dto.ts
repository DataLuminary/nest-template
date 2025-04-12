import { CompleteDto } from "@/common/dto/complete.dto";
import { IsString, IsNotEmpty, IsBoolean, IsOptional } from "class-validator";

export class SpacesDto extends CompleteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsBoolean()
  @IsOptional()
  private?: boolean;

  @IsBoolean()
  @IsOptional()
  isTop?: boolean;

  @IsString()
  @IsOptional()
  logo?: string;
}
