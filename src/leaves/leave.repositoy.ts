import { Injectable } from "@nestjs/common";
import { Leave } from "./leave.entity";
import { Repository } from "typeorm";

@Injectable()
export class LeaveRepository extends Repository<Leave> {
  // Custom queries can go here
}