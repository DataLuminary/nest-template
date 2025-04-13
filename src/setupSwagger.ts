import type { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication) {
  const configService = app.get(ConfigService);
  const config = new DocumentBuilder()
    .setTitle(configService.get<string>("SWAGGER_TITLE") || "DataTalk API")
    .setDescription(
      configService.get<string>("SWAGGER_DESCRIPTION") ||
        "Open API description",
    )
    .setVersion(configService.get<string>("SWAGGER_VERSION") || "1.0")
    .addTag(configService.get<string>("SWAGGER_TAG") || "api-docs")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    configService.get<string>("SWAGGER_PATH") || "swagger",
    app,
    documentFactory,
  );
}
