import { Injectable, Inject } from "@nestjs/common";
import { Repository } from "typeorm";
import { SpaceItem } from "./space.entity";
import { SPACE_REPOSITORY } from "@modules/space/space.providers";

@Injectable()
export class SpaceService {
  constructor(
    @Inject(SPACE_REPOSITORY)
    private repository: Repository<SpaceItem>,
  ) {}

  async findAll(): Promise<SpaceItem[]> {
    return this.repository.find();
  }

  findOne(uid: string) {
    return `This action returns a #${uid} user`;
  }

  update(uid: string) {
    return `This action updates a #${uid} user`;
  }

  remove(uid: string) {
    return `This action removes a #${uid} user`;
  }
}
