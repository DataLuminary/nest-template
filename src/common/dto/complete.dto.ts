import { ApiHideProperty } from "@nestjs/swagger";
import { IsDate, IsString } from "class-validator";

export class CompleteDto {
  @IsString()
  @ApiHideProperty()
  uid: string;

  @IsString()
  @ApiHideProperty()
  creator: string;

  @IsDate()
  @ApiHideProperty()
  created: string;

  @IsString()
  @ApiHideProperty()
  updater: number;

  @IsDate()
  @ApiHideProperty()
  updated: string;
}
