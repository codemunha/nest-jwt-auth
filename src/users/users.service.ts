import { Injectable } from '@nestjs/common';
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'Bird',
      username: 'bird',
      password: 'password',
    },
    {
      id: 2,
      name: 'Tan',
      username: 'tan',
      password: 'password',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
  async getById(id: string): Promise<User | undefined> {
    return this.users.find((user) => user.id == Number(id));
  }
}
