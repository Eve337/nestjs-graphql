import { CreateUserInput } from './dto/input/create-user.input';
import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { GetUserAuth } from './dto/args/get-user-auth.args';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

@Injectable()
export class UserService {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.USER_API,
    });
  }

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    console.log(createUserData);
    const user: User = {
      ...createUserData,
    };

    const res = await this.client.post('register', user);
    return res.data;
  }

  public async getAuth(
    authUserData: GetUserAuth,
  ): Promise<AxiosResponse<{ jwt: string }>> {
    const res = await this.client.post('login', authUserData);
    return res.data.jwt;
  }
}
