import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { UserRepository } from "src/users/user.repository";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private userRepo: UserRepository, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(user: any) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = this.userRepo.create({ ...user, password: hashedPassword });
    return this.userRepo.save(newUser);
  }
}
