import { UserService } from './users.service';
import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver, UserService],
})
export class UserModule {}
