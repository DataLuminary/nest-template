import {
  BaseEntity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class CommonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ name: "created", type: "datetime" })
  created: Date;

  @UpdateDateColumn({ name: "updated" })
  updated: Date | null;
}

export abstract class CompleteEntity extends CommonEntity {
  @Column({
    name: "creator",
    update: false,
    comment: "创建者",
    nullable: true,
  })
  creator: string;

  @Column({
    name: "updater",
    comment: "更新者",
    nullable: true,
  })
  updater: string;
}
