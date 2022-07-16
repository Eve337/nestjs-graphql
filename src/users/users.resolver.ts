import { GetUserAuth } from './dto/args/get-user-auth.args';
import { Resolver, Query, Args, Mutation, Context } from '@nestjs/graphql';

import { User } from './models/user';
import { UserService } from './users.service';
import { CreateUserInput } from './dto/input/create-user.input';
import { AxiosResponse } from 'axios';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UserService) {}

  @Query(() => String, { name: 'JWT', nullable: true })
  async getUserAuth(
    @Args() bodyLog: GetUserAuth,
    @Context() token: any,
  ): Promise<AxiosResponse<{ jwt: string }>> {
    return this.usersService.getAuth(bodyLog);
  }

  @Mutation(() => User)
  async registerUser(
    @Args('createUserData') createUserData: CreateUserInput,
    @Context() token: any,
  ): Promise<User> {
    return this.usersService.createUser(createUserData);
  }
}
