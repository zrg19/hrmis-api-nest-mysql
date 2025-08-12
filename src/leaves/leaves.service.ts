import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { Leave } from './leave.entity';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Injectable()
export class LeavesService {
    constructor(
        @InjectRepository(Leave)
        private leaveRepo: Repository<Leave>,
        @InjectRepository(User)
        private userRepo: Repository<User>,
      ) {}
    
      async create(dto: CreateLeaveDto): Promise<Leave> {
        const user = await this.userRepo.findOneBy({ id: dto.requestedById });
        const leave = this.leaveRepo.create({ ...dto, requestedBy: user as User });
        return this.leaveRepo.save(leave);
      }
    
      async findAll(): Promise<Leave[]> {
        return this.leaveRepo.find({ relations: ['requestedBy'] });
      }
    
      async update(id: number, dto: UpdateLeaveDto): Promise<Leave> {
        await this.leaveRepo.update(id, dto);
        return this.leaveRepo.findOneBy({ id }) as Promise<Leave>;
      }
    
      async remove(id: number): Promise<void> {
        await this.leaveRepo.delete(id);
      }

      async findOne(id: number): Promise<Leave> {
        return this.leaveRepo.findOneBy({ id }) as Promise<Leave>;
      }

      async findByUserId(id: number): Promise<Leave[]> {
        return this.leaveRepo.find({ where: { requestedBy: { id } } }) as Promise<Leave[]>;
      }

      async findPendingLeavesByUserId(id: number): Promise<Leave[]> {
        return this.leaveRepo.find({ where: { requestedBy: { id }, status: 'Pending' } }) as Promise<Leave[]>;
      }

      async findApprovedLeavesByUserId(id: number): Promise<Leave[]> {
        return this.leaveRepo.find({ where: { requestedBy: { id }, status: 'Approved' } }) as Promise<Leave[]>;
      }

      async findRejectedLeavesByUserId(id: number): Promise<Leave[]> {
        return this.leaveRepo.find({ where: { requestedBy: { id }, status: 'Rejected' } }) as Promise<Leave[]>;
      }
}
