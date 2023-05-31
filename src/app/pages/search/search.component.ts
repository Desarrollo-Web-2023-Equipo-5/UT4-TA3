import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { ImagesService } from 'src/app/services/images.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  postList: Post[] = []; 
  imageService: ImagesService = inject(ImagesService);

  constructor(private imgService: ImagesService) { 
    this.imageService.getAllPosts().subscribe( {
      next: (posts) => {
        this.postList = posts;
      }
    });
}
}
