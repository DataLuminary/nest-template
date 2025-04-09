import { DataSourceOptions } from "typeorm";
import { ConfigService } from "@nestjs/config";

// 当前通过 npm scripts 执行的命令
const currentScript = process.env.npm_lifecycle_event;

export function getDatabaseConfig(configService: ConfigService) {
  const dbPort = configService.get<string>("DB_PORT");

  // 验证 DB_PORT 是否存在且为有效的数字
  const port = dbPort ? parseInt(dbPort, 10) : 3306;
  const config: DataSourceOptions = {
    type: "mysql",
    host: configService.get("DB_HOST") || "127.0.0.1",
    port,
    username: configService.get("DB_USERNAME"),
    password: configService.get("DB_PASSWORD"),
    database: configService.get("DB_DATABASE"),
    synchronize: Boolean(configService.get("DB_SYNCHRONIZE")),
    // 解决通过 pnpm migration:run 初始化数据时，遇到的 SET FOREIGN_KEY_CHECKS = 0; 等语句报错问题, 仅在执行数据迁移操作时设为 true
    multipleStatements: currentScript === "typeorm",
    entities: ["dist/modules/**/*.entity{.ts,.js}"],
    migrations: ["dist/migrations/*{.ts,.js}"],
    subscribers: ["dist/modules/**/*.subscriber{.ts,.js}"],
  };
  return config;
}
