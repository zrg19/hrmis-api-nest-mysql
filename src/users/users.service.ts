import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ) {}

    async create(dto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const user = this.userRepo.create({ ...dto, password: hashedPassword, isActive: true });
        return this.userRepo.save(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepo.find({ relations: ['tasks', 'leaves'] });
    }

    async findOne(id: number): Promise<User> {
        return this.userRepo.findOneBy({ id }) as Promise<User>;
    }

    async findByEmail(email: string): Promise<User> {
        return this.userRepo.findOne({ where: { email } }) as Promise<User>;
    }

    async update(id: number, dto: UpdateUserDto): Promise<User> {
        await this.userRepo.update(id, dto);
        return this.userRepo.findOneBy({ id }) as Promise<User>;
    }

    async remove(id: number): Promise<void> {
        await this.userRepo.delete(id);
    }
}
