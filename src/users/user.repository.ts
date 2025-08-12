import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository extends Repository<User> {
  // Custom queries can go here
}