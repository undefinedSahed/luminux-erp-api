import { BaseEntity } from '@src/app/base';
import { ENUM_COLUMN_TYPES, ENUM_TABLE_NAMES } from '@src/shared';
import { Column, Entity, Index, ManyToOne, RelationId } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity(ENUM_TABLE_NAMES.NOTES, { orderBy: { createdAt: 'DESC' } })
export class Note extends BaseEntity {
  public static readonly SEARCH_TERMS: string[] = ['text'];

  @Column({ type: ENUM_COLUMN_TYPES.TEXT, nullable: false })
  text?: string;

  @ManyToOne(() => User, { onDelete: 'RESTRICT' })
  user?: User;

  @Index()
  @RelationId((note: Note) => note.user)
  @Column({ nullable: false })
  userId?: string;
}
