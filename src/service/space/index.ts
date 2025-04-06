import { Injectable } from '@nestjs/common';

@Injectable()
export default class SpaceService {
  getHello(): string {
    return 'Hello World!';
  }
}
