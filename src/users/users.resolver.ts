import { GetUserArgs } from './dto/args/get-user.args';
import { Resolver, Query, Args } from '@nestjs/graphql';

import { User } from './models/user';
import { UserService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser();
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUserArgs: GetUserArgs): User[] {
    return this.usersService.getUsers();
  }
}
