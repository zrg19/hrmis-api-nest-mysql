import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Controller('leaves')
export class LeavesController {
    constructor(private leavesService: LeavesService) {}

    @Post()
    create(@Body() createLeaveDto: CreateLeaveDto) {
        return this.leavesService.create(createLeaveDto);
    }

    @Get()
    findAll() {
        return this.leavesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.leavesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateLeaveDto: UpdateLeaveDto) {
        return this.leavesService.update(id, updateLeaveDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.leavesService.remove(id);
    }

    @Get('user/:id')
    findByUserId(@Param('id') id: number) {
        return this.leavesService.findByUserId(id);
    }

    @Get('user/:id/pending')
    findPendingLeavesByUserId(@Param('id') id: number) {
        return this.leavesService.findPendingLeavesByUserId(id);
    }

    @Get('user/:id/approved')
    findApprovedLeavesByUserId(@Param('id') id: number) {
        return this.leavesService.findApprovedLeavesByUserId(id);
    }

    @Get('user/:id/rejected')
    findRejectedLeavesByUserId(@Param('id') id: number) {
        return this.leavesService.findRejectedLeavesByUserId(id);
    }
}
