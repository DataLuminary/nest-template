import { ApiProperty } from "@nestjs/swagger";
import { Expose, Transform } from "class-transformer";
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export enum Order {
  ASC = "ASC",
  DESC = "DESC",
}

export class PagerDto {
  @ApiProperty({ minimum: 1, default: 1 })
  @Min(1)
  @IsInt()
  @Expose()
  @IsOptional({ always: true })
  @Transform(({ value: val }) => (val ? Number.parseInt(val) : 1), {
    toClassOnly: true,
  })
  page?: number;

  @ApiProperty({ minimum: 1, maximum: 100, default: 10 })
  @Min(10)
  @Max(100)
  @IsInt()
  @IsOptional({ always: true })
  @Expose()
  @Transform(({ value: val }) => (val ? Number.parseInt(val) : 10), {
    toClassOnly: true,
  })
  pageSize?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  keyword?: string; // | keyof T

  @ApiProperty({ enum: Order })
  @IsEnum(Order)
  @IsOptional()
  @Transform(({ value }) => (value === "asc" ? Order.ASC : Order.DESC))
  order?: Order;
}
