import { IsEnum, IsOptional } from "class-validator";

export class UpdateLeaveDto {
    @IsOptional()
    @IsEnum(['Pending', 'Approved', 'Rejected'])
    status?: 'Pending' | 'Approved' | 'Rejected';
}