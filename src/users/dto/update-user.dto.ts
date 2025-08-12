import { IsEnum, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsEnum(['Admin', 'Manager', 'Employee'])
    role?: 'Admin' | 'Manager' | 'Employee';

    @IsOptional()
    @IsString()
    department?: string;

    @IsOptional()
    @IsString()
    designation?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsString()
    address?: string;
}