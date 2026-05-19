import { IsOptional } from 'class-validator';

export class BaseDTO {
  @IsOptional()
  readonly createdBy?: Record<string, any>;

  @IsOptional()
  readonly updatedBy?: Record<string, any>;
}