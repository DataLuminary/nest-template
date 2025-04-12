import { CommonEntity } from "@/common/entity/common.entity";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { v7 } from "uuid";

@Entity()
export class Space extends CommonEntity {
  @Column({ length: 36, unique: true })
  uid: string;

  @Column({ length: 36, unique: true })
  name: string;

  @Column({ default: false })
  private: boolean;

  @Column({ name: "is_top", default: false })
  isTop: boolean;

  @Column({ nullable: true })
  logo: string;

  @Column({ length: 128 })
  creator: string;

  @CreateDateColumn({ name: "created" })
  createdAt: Date;

  @Column({ length: 128 })
  updater: string;

  @UpdateDateColumn({ name: "updated" })
  updatedAt: Date;

  @BeforeInsert()
  generateUid() {
    this.uid = v7();
  }
}
