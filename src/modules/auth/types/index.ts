import type { UserEntity } from "@modules/users/entities/user.entity";

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
  Banned = "banned",
}
export type UserWithoutSensitiveInfo = Omit<UserEntity, "slat" | "password">;
