import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { randomUUID } from 'node:crypto';

@Injectable()
export class UserRepository {
  private users: any[] = [];

  create(user: CreateUserDto) {
    const formatUser = {
      email: user.email,
      name: user.name,
      id: randomUUID(),
    };

    this.users.push(formatUser);

    return formatUser;
  }

  findAll() {
    return this.users;
  }

  updateUserById(id: string, data: UpdateUserDto) {
    const user = this.users.find((user) => user.id === id);

    for (const key in data) {
      user[key] = data[key];
    }

    return user;
  }

  deleteUserById(id: string) {
    const index = this.users.findIndex((user) => user.id === id);

    this.users.splice(index, 1);
  }
}
