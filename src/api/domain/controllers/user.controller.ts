import { Controller, Get } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@Controller('users')
export class UserController {
  constructor(
    private userRepository: UserRepository,
    ) {}

  @Get()
  async getUsers(): Promise<Array<Object>> {
    return await this.userRepository.getUsers();
  }
}
