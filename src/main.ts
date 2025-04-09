import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { setupSwagger } from "@/setupSwagger";

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.setGlobalPrefix("api");
  setupSwagger(app);
  // app.enableCors();
  await app.listen(process.env.PORT ?? 8084);
}

bootstrap();
