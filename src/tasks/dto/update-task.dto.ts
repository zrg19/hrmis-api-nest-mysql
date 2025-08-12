import { IsEnum, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsOptional()
    @IsEnum(['Low', 'Medium', 'High'])
    priority?: 'Low' | 'Medium' | 'High';
  
    @IsOptional()
    @IsString()
    status?: string;
}