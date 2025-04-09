import { Module } from "@nestjs/common";
import { spaceProviders } from "@modules/space/space.providers";
import { SpaceService } from "@modules/space/space.service";
import { DatabaseModule } from "@share/database/database.module";
import { SpaceController } from "@modules/space/space.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [SpaceController],
  providers: [...spaceProviders, SpaceService],
})
export class SpaceModule {}
