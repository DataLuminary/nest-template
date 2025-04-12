import { IsString } from "class-validator";

export class UidDto {
  @IsString()
  readonly uid: string;
}
