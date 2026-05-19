import { BcryptHelper } from '@src/app/helpers';
import { Role } from '@src/app/modules/acl/entities/role.entity';
import { User } from '@src/app/modules/user/entities/user.entity';
import { UserRole } from '@src/app/modules/user/entities/userRole.entity';
import { ENV } from '@src/env';
import { ENUM_ACL_DEFAULT_ROLES, ENUM_AUTH_PROVIDERS } from '@src/shared';
import { DataSource } from 'typeorm';

export default class UserSeeder {
  constructor(private readonly dataSource: DataSource) { }

  public async run(): Promise<void> {
    console.info('=== User Seeder Started ===');
    console.info('Super Admin Email:', ENV.seedData.superAdminEmail);
    console.info('Super Admin Password:', ENV.seedData.superAdminPassword ? '***' : 'undefined');

    // Also check for the incorrectly seeded user with literal $SUPER_ADMIN_EMAIL
    const incorrectUser = await this.dataSource.manager.findOne(User, {
      where: { email: "$SUPER_ADMIN_EMAIL" },
    });

    if (incorrectUser) {
      console.info('Removing incorrectly seeded user with literal email...');
      await this.dataSource.manager.remove(User, incorrectUser);
    }

    const isSuperAdminExist = await this.dataSource.manager.findOne(User, {
      where: [{ email: ENV.seedData.superAdminEmail, }, { username: "superadmin", }],
    });

    console.info('Is Super Admin Exist:', !!isSuperAdminExist);

    if (!isSuperAdminExist) {
      console.info('Creating Super Admin user...');
      const bcryptHelper = new BcryptHelper();

      const password = await bcryptHelper.hash(ENV.seedData.superAdminPassword);

      const createdAdminUser = await this.dataSource.manager.save(User, {
        email: ENV.seedData.superAdminEmail,
        username: 'superadmin',
        fullName: 'Super Admin',
        password,
        authProvider: ENUM_AUTH_PROVIDERS.SYSTEM,
        isVerified: true,
      } satisfies User);

      let superAdminRole = await this.dataSource.manager.findOne(Role, {
        where: {
          title: ENUM_ACL_DEFAULT_ROLES.SUPER_ADMIN,
        },
      });
      if (!superAdminRole) {
        superAdminRole = await this.dataSource.manager.save(Role, {
          title: ENUM_ACL_DEFAULT_ROLES.SUPER_ADMIN,
        } satisfies Role);
      }
      let internalRole = await this.dataSource.manager.findOne(Role, {
        where: {
          title: ENUM_ACL_DEFAULT_ROLES.INTERNAL,
        },
      });
      if (!internalRole) {
        internalRole = await this.dataSource.manager.save(Role, {
          title: ENUM_ACL_DEFAULT_ROLES.INTERNAL,
        } satisfies Role);
      }
      await this.dataSource.manager.save(UserRole, [
        {
          roleId: superAdminRole.id,
          userId: createdAdminUser?.id,
          isDefault: true,
        } satisfies UserRole,
        {
          roleId: internalRole.id,
          userId: createdAdminUser?.id,
          isDefault: true,
        } satisfies UserRole,
      ]);
      console.info('Super Admin user created successfully with ID:', createdAdminUser?.id);
    } else {
      console.info('Super Admin user already exists with ID:', isSuperAdminExist.id);
    }
    console.info('=== User Seeder Completed ===');
  }
}
