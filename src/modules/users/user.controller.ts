import { Controller, Get, Body, Patch, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UserController {
  constructor(private readonly service: UsersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(":uid")
  findOne(@Param("uid") uid: string) {
    return this.service.findOne({ uid });
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
