import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SpaceService } from "./space.service";

@Controller("space")
export class SpaceController {
  constructor(private readonly service: SpaceService) {}

  @Post()
  create(@Body() createUserDto) {
    console.log(createUserDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":uid")
  findOne(@Param("uid") uid: string) {
    return this.service.findOne(uid);
  }

  @Patch(":uid")
  update(@Param("uid") uid: string, @Body() updateUserDto) {
    console.log(+uid, updateUserDto);
  }

  @Delete(":uid")
  remove(@Param("uid") uid: string) {
    return this.service.remove(uid);
  }
}
