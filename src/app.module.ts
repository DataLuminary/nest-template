import { getDatabaseConfig } from "@/config/database.config";
import { JwtAuthGuard } from "@modules/auth/guards/jwt-auth-guard.service";
import { SpaceModule } from "@modules/space/space.module";
import { UserModule } from "@modules/users/user.module";
import { AuthModule } from "@modules/auth/auth.module";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import * as Joi from "joi";

import {
  AcceptLanguageResolver,
  CookieResolver,
  I18nModule,
  QueryResolver,
} from "nestjs-i18n";
import { TypeOrmModule } from "@nestjs/typeorm";
import { APP_GUARD } from "@nestjs/core";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", `.env.${process.env.NODE_ENV || "development"}`],
      // 控制是否不解析.env文件，只使用运行时注入的环境变量
      ignoreEnvFile: false,
      // 是否是全局模块
      isGlobal: true,
      validationSchema: Joi.object({
        // logger
        LOGGER_LEVEL: Joi.string().required(),
        // JWT
        JWT_EXPIRE: Joi.number()
          .required()
          .min(60 * 10), // 至少10 分钟
        REFRESH_TOKEN_SECRET: Joi.string().required().min(6),
        REFRESH_TOKEN_EXPIRE: Joi.number().required().min(86400), // 至少1天,
        //DB
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required().default(3306).min(1024).max(65535),
        DB_DATABASE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_SYNCHRONIZE: Joi.boolean().required(),
        DB_LOGGING: Joi.string()
          .custom((value: string) => value.split(",")) // 将字符串转换为数组
          .default("query,error"),
      }),
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
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseConfig = getDatabaseConfig(configService);
        return {
          ...databaseConfig,
          synchronize: true,
          autoLoadEntities: true,
        };
      },
      /*dataSourceFactory: async (options) => {
        const dataSource = await new DataSource(options!).initialize();
        return dataSource;
      },*/
    }),
    AuthModule,
    UserModule,
    UserModule,
    SpaceModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
