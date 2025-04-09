import { DataSource } from "typeorm";
import { ConfigService } from "@nestjs/config";
import { getDatabaseConfig } from "@/config/database.config";

export const DATA_SOURCE_REPOSITORY = "DATA_SOURCE";
export const databaseProviders = [
  {
    provide: DATA_SOURCE_REPOSITORY,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const databaseConfig = getDatabaseConfig(configService);
      const dataSource = new DataSource(databaseConfig);
      return dataSource.initialize();
    },
  },
];
