import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUser(username: string) {
    return this.users.find(user => user.username === username);
  }
}
