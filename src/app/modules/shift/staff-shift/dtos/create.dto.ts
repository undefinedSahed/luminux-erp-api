import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsUUID } from 'class-validator';
import { BaseDTO } from '@src/app/base/base.dto';

export class CreateStaffShiftDto extends BaseDTO {
    @ApiProperty({ type: String, required: true, example: 'uuid-staff' })
    @IsNotEmpty()
    @IsUUID()
    readonly staffId!: string;

    @ApiProperty({ type: String, required: true, example: 'uuid-shift' })
    @IsNotEmpty()
    @IsUUID()
    readonly shiftId!: string;

    @ApiProperty({ type: String, required: true, example: '2025-06-01' })
    @IsNotEmpty()
    @IsDateString()
    readonly fromDate!: string;

    @ApiProperty({ type: String, required: true, example: '2025-06-30' })
    @IsNotEmpty()
    @IsDateString()
    readonly toDate!: string;
}