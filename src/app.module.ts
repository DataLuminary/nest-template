import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@modules/users/users.module";
import { SpaceModule } from "@modules/space/space.module";
import { DatabaseModule } from "@share/database/database.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", `.env.${process.env.NODE_ENV || "development"}`],
      // 控制是否不解析.env文件，只使用运行时注入的环境变量
      ignoreEnvFile: false,
      // 是否是全局模块
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    SpaceModule,
  ],
  providers: [],
})
export class AppModule {}
