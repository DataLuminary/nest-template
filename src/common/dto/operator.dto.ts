import { ApiHideProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";

export class OperatorDto {
  @ApiHideProperty()
  @Exclude()
  creator: number;

  @ApiHideProperty()
  @Exclude()
  updater: number;
}
