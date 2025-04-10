import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "@modules/users/users.module";
import { SpaceModule } from "@modules/space/space.module";
import { DatabaseModule } from "@share/database/database.module";
import {
  AcceptLanguageResolver,
  CookieResolver,
  I18nModule,
  QueryResolver,
} from "nestjs-i18n";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", `.env.${process.env.NODE_ENV || "development"}`],
      // 控制是否不解析.env文件，只使用运行时注入的环境变量
      ignoreEnvFile: false,
      // 是否是全局模块
      isGlobal: true,
    }),
    I18nModule.forRoot({
      fallbackLanguage: "en",
      loaderOptions: {
        path: "src/i18n/",
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ["lang"] },
        new CookieResolver(["lang"]),
        AcceptLanguageResolver,
      ],
    }),
    DatabaseModule,
    UsersModule,
    SpaceModule,
  ],
  providers: [],
})
export class AppModule {}
