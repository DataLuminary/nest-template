import { DataSource } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { DATA_SOURCE_REPOSITORY } from "@share/database/database.providers";

export const USER_REPOSITORY = "USER_REPOSITORY";
export const userProviders = [
  {
    // 这里官方不建议直接写字符串，建议使用constants.ts 存储 PhotoRepositoryToken
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UserEntity),
    inject: [DATA_SOURCE_REPOSITORY],
  },
];
