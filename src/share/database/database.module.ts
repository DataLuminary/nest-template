import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getDatabaseConfig } from "@/config/database.config";
import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

@Module({
  imports: [],
})
export class DatabaseModule {}
