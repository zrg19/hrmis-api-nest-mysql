import { IsEnum, IsInt, IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    title: string;
  
    @IsString()
    description: string;
  
    @IsEnum(['Low', 'Medium', 'High'])
    priority: 'Low' | 'Medium' | 'High';
  
    @IsInt()
    assignedToId: number;
}