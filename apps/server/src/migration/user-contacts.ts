import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserContactsTableMigration1746560560140
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user_contacts" (
        "userId" uuid NOT NULL,
        "contactId" uuid NOT NULL,
        CONSTRAINT "PK_user_contacts" PRIMARY KEY ("userId", "contactId"),
        CONSTRAINT "FK_user_contacts_user" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE,
        CONSTRAINT "FK_user_contacts_contact" FOREIGN KEY ("contactId") REFERENCES "users"("id") ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user_contacts"`);
  }
}
