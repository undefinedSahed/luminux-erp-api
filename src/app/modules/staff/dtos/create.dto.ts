import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { BaseDTO } from '@src/app/base/base.dto';

class EmergencyContactDto {
  @ApiProperty({ type: String, required: true, example: 'Jane Doe' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: true, example: '+8801XXXXXXXXX' })
  @IsNotEmpty()
  @IsString()
  readonly phone!: string;

  @ApiProperty({ type: String, required: true, example: 'Sister' })
  @IsNotEmpty()
  @IsString()
  readonly relation!: string;
}

export class CreateStaffDto extends BaseDTO {
  // Personal Info
  @ApiProperty({ type: String, required: true, example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  readonly name!: string;

  @ApiProperty({ type: String, required: false, example: 'john@example.com' })
  @IsOptional()
  @IsEmail()
  readonly email!: string;

  @ApiProperty({ type: String, required: false, example: '+8801XXXXXXXXX' })
  @IsOptional()
  @IsString()
  readonly phone!: string;

  @ApiProperty({ type: String, required: false, example: 'https://cdn.example.com/photo.jpg' })
  @IsOptional()
  @IsString()
  readonly photo!: string;

  @ApiProperty({ type: String, required: false, example: '1990-01-15' })
  @IsOptional()
  @IsString()
  readonly dateOfBirth!: string;

  @ApiProperty({ type: String, required: false, example: '1234567890' })
  @IsOptional()
  @IsString()
  readonly nid!: string;

  @ApiProperty({ type: EmergencyContactDto, required: false })
  @IsOptional()
  @IsObject()
  @ValidateNested()
  @Type(() => EmergencyContactDto)
  readonly emergencyContact!: EmergencyContactDto;

  // Employment Info
  @ApiProperty({ type: String, required: true, example: 'EMP-001' })
  @IsNotEmpty()
  @IsString()
  readonly employeeId!: string;

  @ApiProperty({ type: String, required: false, example: '2024-01-15' })
  @IsOptional()
  @IsString()
  readonly joiningDate!: string;

  @ApiProperty({ type: Number, required: false, example: 50000 })
  @IsOptional()
  @IsNumber()
  readonly salary!: number;

  // Relations
  @ApiProperty({ type: String, required: false, example: 'uuid-designation' })
  @IsOptional()
  @IsUUID()
  readonly designationId!: string;

  @ApiProperty({ type: String, required: false, example: 'uuid-department' })
  @IsOptional()
  @IsUUID()
  readonly departmentId!: string;

  @ApiProperty({ type: String, required: false, example: 'uuid-user' })
  @IsOptional()
  @IsUUID()
  readonly userId!: string;

  @ApiProperty({ type: Boolean, required: false, example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive!: boolean;
}