import { IsDefined, IsNotEmpty, IsNumber } from "class-validator";

export class BatchDeleteDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  readonly ids: number[];
}
