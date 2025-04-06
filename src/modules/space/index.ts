import { Controller, Get } from '@nestjs/common';
import SpaceService from '@service/space/index';

@Controller()
export class SpaceController {
  constructor(private readonly appService: SpaceService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
