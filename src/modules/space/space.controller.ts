import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { SpaceService } from "./space.service";
import { SpaceCreateDto } from "src/modules/space/dto/space.create.dto";
import { SpaceUpdateDto } from "src/modules/space/dto/space.update.dto";

@Controller("spaces")
export class SpaceController {
  constructor(private readonly spaceService: SpaceService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createSpaceDto: SpaceCreateDto) {
    console.log(createSpaceDto);
    return this.spaceService.create(createSpaceDto);
  }

  @Get()
  findAll() {
    return this.spaceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.spaceService.findOne(+id);
  }

  @Patch(":id")
  @UsePipes(new ValidationPipe({ transform: true }))
  update(@Param("id") id: string, @Body() updateSpaceDto: SpaceUpdateDto) {
    return this.spaceService.update(+id, updateSpaceDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.spaceService.delete(+id);
  }
}
