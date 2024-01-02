import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/user.repositoriy';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UserRepository) {}

  create(user: CreateUserDto) {
    return this.repository.create(user);
  }

  findAll() {
    return this.repository.findAll();
  }

  update(id: string, updateUserById: UpdateUserDto) {
    return this.repository.updateUserById(id, updateUserById);
  }

  delete(id: string) {
    return this.repository.deleteUserById(id);
  }
}
