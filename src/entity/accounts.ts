import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("compound_id", ["compoundId"], { unique: true })
@Index("accounts_pkey", ["id"], { unique: true })
@Index("provider_account_id", ["providerAccountId"], {})
@Index("provider_id", ["providerId"], {})
@Index("user_id", ["userId"], {})
@Entity("accounts", { schema: "public" })
export class Accounts {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: number;

  @Column("character varying", { name: "compound_id", length: 255 })
  compoundId: string;

  @Column("bigint", { name: "user_id" })
  userId: number;

  @Column("character varying", { name: "provider_type", length: 255 })
  providerType: string;

  @Column("character varying", { name: "provider_id", length: 255 })
  providerId: string;

  @Column("character varying", { name: "provider_account_id", length: 255 })
  providerAccountId: string;

  @Column("text", { name: "refresh_token", nullable: true })
  refreshToken: string | null;

  @Column("text", { name: "access_token", nullable: true })
  accessToken: string | null;

  @Column("timestamp with time zone", {
    name: "access_token_expires",
    nullable: true,
  })
  accessTokenExpires: Date | null;

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
