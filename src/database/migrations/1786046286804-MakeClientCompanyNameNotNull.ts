import { MigrationInterface, QueryRunner } from "typeorm";

export class MakeClientCompanyNameNotNull1786046286804 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            UPDATE "clients"
            SET "companyName" = 'Unknown Company'
            WHERE "companyName" IS NULL
        `);

        await queryRunner.query(`
            ALTER TABLE "clients"
            ALTER COLUMN "companyName" SET NOT NULL
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "clients"
            ALTER COLUMN "companyName" DROP NOT NULL
        `);
    }

}
