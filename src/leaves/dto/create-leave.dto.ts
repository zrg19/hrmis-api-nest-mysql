import { IsDateString, IsInt, IsString } from "class-validator";

export class CreateLeaveDto {
    @IsDateString()
    startDate: string;
  
    @IsDateString()
    endDate: string;
  
    @IsString()
    reason: string;
  
    @IsInt()
    requestedById: number;
}