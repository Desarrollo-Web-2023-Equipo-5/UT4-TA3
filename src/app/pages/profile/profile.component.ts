import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { ImagesService } from 'src/app/services/images.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user!: User;
  posts!: Post[]

  constructor( private userService: UserService, private imageService: ImagesService ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: user => this.user = user
    })
    this.imageService.getPostsByUsername(this.user.username).subscribe({
      next: posts => this.posts = posts
    })
  }


}
