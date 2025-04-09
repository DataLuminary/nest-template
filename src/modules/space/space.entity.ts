import { Entity, Column, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity("space")
@Unique(["uid"]) // uid 唯一约束
export class SpaceItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  uid: string;
  @Column()
  name: string;
  @Column({
    type: "tinyint",
    name: "private",
    transformer: {
      to: (value: boolean) => (value ? 1 : 0), // 在保存到数据库时，将 true 转换为 1，false 转换为 0
      from: (value: number) => value === 1, // 从数据库读取时，将 1 转换为 true，0 转换为 false
    },
  })
  private: boolean;
  @Column({
    type: "tinyint",
    name: "is_top",
    transformer: {
      to: (value: boolean) => (value ? 1 : 0), // 在保存到数据库时，将 true 转换为 1，false 转换为 0
      from: (value: number) => value === 1, // 从数据库读取时，将 1 转换为 true，0 转换为 false
    },
  })
  isTop: boolean;
  @Column()
  logo: string;
  @Column({ name: "creator" })
  creator: string;
  @Column({ type: "datetime" })
  created: string;
  @Column({ name: "updater" })
  updater: string;
  @Column({ name: "updated" })
  updated: string;
}
