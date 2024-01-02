import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRepository } from './repositories/user.repositoriy';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule {}
