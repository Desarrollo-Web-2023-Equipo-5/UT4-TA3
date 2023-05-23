import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  POSTS: Post[] = [
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO93Pl9dF6_ASyF-6lGxW7u4wSrGvSSH6Kew&usqp=CAU',
      tag: '',
      uploader: '@Jane',
    },
  ]

  constructor() { }

  getPostsByUsername(username: string): Observable<Post[]> {
    return of(this.POSTS.filter(post => post.uploader === username))
  }
}
