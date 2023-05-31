import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  POSTS: Post[] = [
    {
      description: '',
      photo: 'https://picsum.photos/200',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/201',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/202',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/203',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/204',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/205',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/206',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/207',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/208',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/209',
      tag: '',
      uploader: '@Jane',
    },
  ];
  getAllPosts(): Observable<Post[]> {
    return of(this.POSTS);
  }

  constructor() { }

  getPostsByUsername(username: string): Observable<Post[]> {
    return of(this.POSTS.filter(post => post.uploader === username))
  }


}
