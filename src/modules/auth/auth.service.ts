import { Injectable } from "@nestjs/common";
import { UserEntity } from "@modules/users/entities/user.entity";
import type { FindOptionsWhere, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
  async findOne(opt: FindOptionsWhere<UserEntity>): Promise<UserEntity | null> {
    return this.userRepository.findOne({ where: opt });
  }

  update(uid: string) {
    return `This action updates a #${uid} user`;
  }

  async remove(uid: string) {
    return this.userRepository.delete({ uid });
  }
}
