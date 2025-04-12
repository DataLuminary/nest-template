import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Space } from "./entities/space.entity";
import { SpaceCreateDto } from "src/modules/space/dto/space.create.dto";
import { SpaceUpdateDto } from "src/modules/space/dto/space.update.dto";

@Injectable()
export class SpaceService {
  constructor(
    @InjectRepository(Space)
    private repository: Repository<Space>,
  ) {}

  async findAll(): Promise<Space[]> {
    return this.repository.find();
  }

  async findOne(key: number | string, field = "uid"): Promise<Space> {
    const data = await this.repository.findOne({ where: { [field]: key } });
    if (!data) {
      throw new NotFoundException("Space not found");
    }
    return data;
  }

  async create(createSpaceDto: SpaceCreateDto): Promise<Space> {
    const space = this.repository.create({
      ...createSpaceDto,
      uid: this.generateUid(),
    });
    return this.repository.save(space);
  }

  async update(id: number, updateSpaceDto: SpaceUpdateDto): Promise<Space> {
    await this.repository.update(id, updateSpaceDto);
    const updatedSpace = await this.repository.findOne({ where: { id } });
    if (!updatedSpace) {
      throw new NotFoundException("Space not found");
    }
    return updatedSpace;
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException("Space not found");
    }
  }

  private generateUid(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}
