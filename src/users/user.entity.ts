import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Leave } from "../leaves/leave.entity";
import { Task } from "../tasks/task.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  department: string;

  @Column()
  designation: string;

  @Column()
  phone: string;

  @Column()
  address: string;

  @Column()
  isActive: boolean;

  @Column({ type: 'enum', enum: ['Admin', 'Manager', 'Employee'] })
  role: 'Admin' | 'Manager' | 'Employee';

  @OneToMany(() => Task, task => task.assignedTo)
  tasks: Task[];

  @OneToMany(() => Leave, leave => leave.requestedBy)
  leaves: Leave[];
}
