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
      photo: 'https://picsum.photos/500/600?random=1',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=2 ',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=3',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=4',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=5',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=6',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=7',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=8',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=9',
      tag: '',
      uploader: '@Jane',
    },
    {
      description: '',
      photo: 'https://picsum.photos/500/600?random=10',
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
