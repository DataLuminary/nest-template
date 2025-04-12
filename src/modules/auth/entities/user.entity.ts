import { md5 } from "@/utils/crypto";
import { Entity, Column, Unique, BeforeInsert } from "typeorm";
import { CommonEntity } from "@/common/entity/common.entity";
import { Exclude } from "class-transformer";
import { v4, v7 } from "uuid";

@Entity("user") // 指定表名
@Unique(["uid"]) // uid 唯一约束
@Unique(["mobile"]) // mobile 唯一约束
@Unique(["email"]) // email 唯一约束
export class UserEntity extends CommonEntity {
  @Column({ type: "varchar", length: 36, unique: true })
  uid: string;

  @Column({ type: "varchar", length: 36, unique: true })
  name: string;

  @Column({ nullable: true })
  mobile: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @Column()
  slat: string;

  @Column({ nullable: true })
  nickname: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({
    type: "enum", // 指定字段类型为枚举
    enum: ["active", "inactive", "banned"], // 定义枚举值
    default: "active", // 设置默认值为 'active'
    nullable: false, // 设置字段为 NOT NULL
    comment: "用户状态（active: 启用, inactive: 禁用, banned: 封禁）", // 添加注释
  })
  status: "active" | "inactive" | "banned"; // TypeScript 类型定义

  @Exclude()
  @Column({
    name: "creator",
    update: false,
    comment: "创建者",
    nullable: true,
    default: "signup",
  })
  creator: string;

  @Exclude()
  @Column({
    name: "updater",
    comment: "更新者",
    nullable: true,
    default: "signup",
  })
  updater: string;

  @BeforeInsert()
  generateUidAndHashPassword() {
    this.uid = v7();
    this.slat = v4();
    this.password = md5(`${this.password}${this.slat}`);
  }
}
