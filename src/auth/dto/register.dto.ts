import { IsEmail, IsString, MinLength, IsEnum, IsOptional } from 'class-validator';

export class RegisterDto {
    @IsString()
    name: string;
    
    @IsEmail()
    email: string;
    
    @IsString()
    @MinLength(6)
    password: string;
    
    @IsEnum(['Admin', 'Manager', 'Employee'])
    @IsOptional()
    role: 'Admin' | 'Manager' | 'Employee' = 'Employee';
    
    @IsString()
    department: string;
    
    @IsString()
    designation: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    address: string;
}