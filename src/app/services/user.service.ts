import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { USERS } from '../mock/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USERS: User[] = USERS



  getAllUsers(): Observable<User[]> {
    return of(this.USERS)
  }

  getUser(): Observable<User> {
    return of(this.USERS[0])
  }

  getUserByUsername(username: string): Observable<User | undefined> {
    return of(this.USERS.find(user => user.username === username))
  }
}
