import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { User } from 'src/users/user.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(dto: CreateTaskDto): Promise<Task> {
    const user = await this.userRepo.findOneBy({ id: dto.assignedToId });
    const task = this.taskRepo.create({ ...dto, assignedTo: user as User });
    return this.taskRepo.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.taskRepo.find({ relations: ['assignedTo'] });
  }

  async findOne(id: number): Promise<Task> {
    return this.taskRepo.findOneBy({ id }) as Promise<Task>;
  }

  async update(id: number, dto: UpdateTaskDto): Promise<Task> {
    await this.taskRepo.update(id, dto);
    return this.taskRepo.findOneBy({ id }) as Promise<Task>;
  }

  async remove(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
}
