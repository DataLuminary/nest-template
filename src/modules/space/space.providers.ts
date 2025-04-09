import { DataSource } from "typeorm";
import { SpaceItem } from "./space.entity";
import { DATA_SOURCE_REPOSITORY } from "@share/database/database.providers";

export const SPACE_REPOSITORY = "SPACE_REPOSITORY";
export const spaceProviders = [
  {
    provide: SPACE_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(SpaceItem),
    inject: [DATA_SOURCE_REPOSITORY],
  },
];
