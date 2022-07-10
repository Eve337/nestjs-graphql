import { DeleteUserInput } from './input/delete-user.input';
import { GetUsersArgs } from './dto/args/get-users-args';
import { UpdateUserInput } from './input/update-user.input';
import { CreateUserInput } from './input/create-user.input';
import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { GetUserArgs } from './dto/args/get-user.args';

@Injectable()
export class UserService {
  private users: User[] = [];

  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      _id: uuidv4(),
      ...createUserData,
    };

    this.users.push(user);

    return user;
  }

  public updateUser(updateUserData: UpdateUserInput): User {
    const user = this.users.find((user) => user._id === updateUserData._id);

    Object.assign(user, updateUserData);

    return user;
  }

  public getUser(getUserArgs: GetUserArgs): User {
    return this.users.find((user) => user._id === getUserArgs._id);
  }

  public getUsers(getUsersArgs: GetUsersArgs): User[] {
    return getUsersArgs._ids.map((_id) => this.getUser({ _id }));
  }

  public deleteUser(deleteUserData: DeleteUserInput): User {
    const userIndex = this.users.findIndex(
      (user) => user._id === deleteUserData._id,
    );

    const user = this.users[userIndex];

    this.users.splice(userIndex);

    return user;
  }
}
