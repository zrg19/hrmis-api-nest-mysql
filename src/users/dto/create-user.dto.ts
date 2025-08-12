import { IsEmail, IsEnum, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string;
  
    @IsEmail()
    email: string;
  
    @IsString()
    password: string;
  
    @IsEnum(['Admin', 'Manager', 'Employee'])
    role: 'Admin' | 'Manager' | 'Employee';

    @IsString()
    department: string;

    @IsString()
    designation: string;

    @IsString()
    phone: string;

    @IsString()
    address: string;
  }