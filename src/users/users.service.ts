import { Injectable } from "@nestjs/common";
import { User } from "./models/user";

@Injectable();
export class UserService {
  private users: User[] = User;

  public createUser(): User {

  }

  public updateUser(): User {

  }

  public getUser(): User {
    
  }

  public getUsers(): User[] {

  }

  public deleteUser(): User {

  }
}