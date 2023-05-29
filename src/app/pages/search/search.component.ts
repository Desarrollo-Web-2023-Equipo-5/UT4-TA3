import { Component, inject } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { Post } from 'src/app/interfaces/post';
import { ImagesService } from 'src/app/services/images.service';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  postList: Post[] = []; 
  imageService: ImagesService = inject(ImagesService);

  constructor(){
  this.postList = this.imageService.getAllPosts()
}
}
