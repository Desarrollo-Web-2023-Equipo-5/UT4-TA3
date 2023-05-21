import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER: User = {
    name: 'Jane',
    location: 'San Francisco, CA',
    profileImg: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc=',
    posts: [
      { imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU'},
      { imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruQpKwvFQz60VYUhG5mcFz3UbrB6yp2EjDw&usqp=CAU'},
      { imgUrl: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc='},
      { imgUrl: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc='},
      { imgUrl: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc='},
      { imgUrl: 'https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg'},
      { imgUrl: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc='},
      { imgUrl: 'https://st4.depositphotos.com/9998432/24360/v/450/depositphotos_243600690-stock-illustration-person-gray-photo-placeholder-girl.jpg'},
      { imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU'},
      { imgUrl: 'https://media.istockphoto.com/id/1327592692/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-woman.jpg?s=612x612&w=0&k=20&c=y-dvtlLq6ksJ9aJXkkw2prwGwSiQvY37JfPpb73wYTc='},
    ]
  }

  constructor() { }

  getUser(): Observable<User> {
    return of(this.USER)
  }
}
