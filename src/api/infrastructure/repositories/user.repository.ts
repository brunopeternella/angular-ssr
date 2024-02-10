import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  getUsers(): Promise<Array<Object>> {
    return new Promise((resolve, reject) => {
        const users = [
            {
                id: 1,
                name: "bruno1"
            },
            {
                id: 2,
                name: "bruno2"
            }
        ];

        resolve(users)
    })
  }
}
