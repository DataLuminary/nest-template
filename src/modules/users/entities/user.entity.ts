import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from "typeorm";

@Entity("user") // 指定表名
@Unique(["uid"]) // uid 唯一约束
@Unique(["mobile"]) // mobile 唯一约束
@Unique(["email"]) // email 唯一约束
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uid: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  mobile: string;

  @Column()
  email: string;

  @Column()
  password: string;

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

  @Column()
  creator: string;

  @CreateDateColumn({ name: "created", type: "datetime" })
  created: Date;

  @Column()
  updater: string;

  @UpdateDateColumn({ name: "updated" })
  updated: Date | null;
}
