import { MigrationInterface, QueryRunner } from "typeorm";

export class User1698321500514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // this part you will add your self
    await queryRunner.query(
      ` 
          --Table Definition
          CREATE TABLE "users"  (
            "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
            "firstName" character varying NOT NULL,
            "lastName" character varying NOT NULL,
            "department" character varying NOT NULL,
            "title" character varying NOT NULL,
            "phoneNumber" character varying NOT NULL,
            "email" character varying NOT NULL,
            "password" character varying NOT NULL,
            "createdAt" TIMESTAMP NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP NOT NULL DEFAULT now(),
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
          )
          `,
    ),
      undefined;
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // and this part
    await queryRunner.query(`DROP TABLE "users"`, undefined);
  }
}
