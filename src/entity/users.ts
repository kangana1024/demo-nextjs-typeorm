import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("email", ["email"], { unique: true })
@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: number;

  @Column("character varying", { name: "name", nullable: true, length: 255 })
  name: string | null;

  @Column("character varying", { name: "email", nullable: true, length: 255 })
  email: string | null;

  @Column("timestamp with time zone", {
    name: "email_verified",
    nullable: true,
  })
  emailVerified: Date | null;

  @Column("text", { name: "image", nullable: true })
  image: string | null;

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
