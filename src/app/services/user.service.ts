import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER: User = {
    name: 'Jane',
    surname: 'Doe',
    username: '@Jane',
    location: 'San Francisco, CA',
    profilePhoto: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc=',
  }

  constructor() { }

  getUser(): Observable<User> {
    return of(this.USER)
  }
}
