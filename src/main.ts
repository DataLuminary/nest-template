import { JwtAuthGuard } from "@modules/auth/guards/jwt-auth-guard.service";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "@/app.module";
import { setupSwagger } from "@/setupSwagger";
import { I18nValidationExceptionFilter, I18nValidationPipe } from "nestjs-i18n";
import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
      bodyLimit: 1048576,
      ignoreTrailingSlash: true,
    }),
  );
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new I18nValidationPipe());
  app.useGlobalFilters(
    new I18nValidationExceptionFilter({
      detailedErrors: false, // 设置是否显示详细错误信息
    }),
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix(configService.get<string>("GLOBAL_PREFIX") || "api");
  setupSwagger(app);
  // app.enableCors();
  await app.listen(configService.get<number>("APP_PORT") || 8084);
}

bootstrap();
