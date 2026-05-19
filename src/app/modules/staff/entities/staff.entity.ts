import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Type } from 'class-transformer';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, RelationId } from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { User } from '../../user/entities/user.entity';
import { Designation } from '../designation/entities/designation.entity';
import { StaffShift } from '../../shift/staff-shift/entities/staff-shift.entity';

@Entity(ENUM_TABLE_NAMES.STAFF, { orderBy: { createdAt: 'DESC' } })
export class Staff extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['name', 'email', 'phone', 'employeeId'];

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, length: 250, nullable: false })
  name?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true, unique: true })
  email?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  phone?: string;

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: true })
  photo?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  dateOfBirth?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  nid?: string;

  @Column({ type: ENUM_COLUMN_TYPES.JSONB, nullable: true, default: null })
  emergencyContact?: {
    name: string;
    phone: string;
    relation: string;
  };

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: false, unique: true })
  employeeId?: string;

  @Column({ type: ENUM_COLUMN_TYPES.VARCHAR, nullable: true })
  joiningDate?: string;

  @Column({ type: ENUM_COLUMN_TYPES.INT, nullable: true })
  salary?: number;

  @ManyToOne(() => Designation, { onDelete: 'SET NULL', nullable: true })
  @Type(() => Designation)
  designation?: Designation;

  @RelationId((e: Staff) => e.designation)
  @Column({ nullable: true })
  designationId?: string;

  @ManyToOne(() => Department, { onDelete: 'SET NULL', nullable: true })
  @Type(() => Department)
  department?: Department;

  @RelationId((e: Staff) => e.department)
  @Column({ nullable: true })
  departmentId?: string;

  @OneToOne(() => User, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn()
  @Type(() => User)
  user?: User;

  @RelationId((e: Staff) => e.user)
  @Column({ nullable: true })
  userId?: string;

  @OneToMany(() => StaffShift, (ss) => ss.staff)
  staffShifts?: StaffShift[];
}