import { DeleteUserInput } from './input/delete-user.input';
import { UpdateUserInput } from './input/update-user.input';
import { GetUsersArgs } from './dto/args/get-users-args';
import { GetUserArgs } from './dto/args/get-user.args';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { User } from './models/user';
import { UserService } from './users.service';
import { CreateUserInput } from './input/create-user.input';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.usersService.getUser(getUserArgs);
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.usersService.getUsers(getUsersArgs);
  }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput): User {
    return this.usersService.createUser(createUserData);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
    return this.usersService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  deleteUser(@Args('deleteUserDate') deleteUserData: DeleteUserInput): User {
    return this.usersService.deleteUser(deleteUserData);
  }
}
