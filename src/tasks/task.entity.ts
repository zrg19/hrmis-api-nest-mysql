import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ['Low', 'Medium', 'High'] })
  priority: 'Low' | 'Medium' | 'High';

  @Column({ default: 'Pending' })
  status: string;

  @ManyToOne(() => User, user => user.tasks)
  assignedTo: User;
}
