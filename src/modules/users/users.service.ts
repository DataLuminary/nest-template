import { Injectable, Inject } from "@nestjs/common";
import { USER_REPOSITORY } from "./user.providers";
import { UserEntity } from "@modules/users/entities/user.entity";
import type { Repository } from "typeorm";

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY)
    private repository: Repository<UserEntity>,
  ) {}

  create() {
    return "This action adds a new user";
  }

  async findAll() {
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
