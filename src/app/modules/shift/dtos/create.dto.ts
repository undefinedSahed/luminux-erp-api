import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { BaseDTO } from '@src/app/base/base.dto';

export class CreateShiftDto extends BaseDTO {
    @ApiProperty({ type: String, required: true, example: 'Morning Shift' })
    @IsNotEmpty()
    @IsString()
    readonly name!: string;

    @ApiProperty({ type: String, required: false, example: 'Morning shift from 8am to 4pm' })
    @IsOptional()
    @IsString()
    readonly description!: string;

    @ApiProperty({ type: String, required: true, example: '08:00' })
    @IsNotEmpty()
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'startTime must be in HH:mm format' })
    readonly startTime!: string;

    @ApiProperty({ type: String, required: true, example: '16:00' })
    @IsNotEmpty()
    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)$/, { message: 'endTime must be in HH:mm format' })
    readonly endTime!: string;

    @ApiProperty({ type: Boolean, required: false, example: true })
    @IsOptional()
    @IsBoolean()
    readonly isActive!: boolean;
}