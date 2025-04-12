import { PartialType } from "@nestjs/swagger";
import { SpaceCreateDto } from "src/modules/space/dto/space.create.dto";

export class SpaceUpdateDto extends PartialType(SpaceCreateDto) {}
