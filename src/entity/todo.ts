import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
export enum TodoStatus {
  DONE = 'done',
  PENDING = 'pending',
  DELETE = 'delete'
}
@Index("name", ["title"], { unique: true })
@Index("todos_pkey", ["id"], { unique: true })
@Entity("todos", { schema: "public" })
export class Todos {
  @PrimaryGeneratedColumn({ type: "bigint", name: 'id' })
  id: number

  @Column("character varying", { name: "title", length: 255 })
  title: string

  @Column("character varying", { name: "detail", nullable: true })
  detail: string | null

  @Column({ type: "enum", enum: TodoStatus, name: "status", default: TodoStatus.PENDING })
  status: TodoStatus

  @Column("timestamp with time zone", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column("timestamp with time zone", {
    name: "updated_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;
}