import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { Post } from 'src/app/interfaces/post';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('slider', { static: true }) sliderElement!: ElementRef;
  slider!: HammerManager;
  currentIndex = 0;
  translateX = 0;
  posts!: Post[];

  constructor(private imgService: ImagesService) { }
  ngOnInit() {
    this.imgService.getAllPosts().subscribe( {
      next: (posts) => {
        this.posts = posts;
      }
    });
    const element: HTMLElement = this.sliderElement.nativeElement;
    this.slider = new Hammer.Manager(element, {
      touchAction: 'pan-y' // Allow vertical scrolling on touch devices
    });

    this.slider.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL }));
    
    element.addEventListener('wheel', (event) => this.onWheel(event));
  }


  onWheel(event: WheelEvent) {
    const delta = Math.sign(event.deltaX);
  
    if (delta > 0 && this.currentIndex < this.posts.length - 1) {
      this.currentIndex++;
    } else if (delta < 0 && this.currentIndex > 0) {
      this.currentIndex--;
    }
  
    const maxTranslateX = (this.posts.length - 1) * -300;
    this.translateX = Math.max(maxTranslateX, -this.currentIndex * 10); // Adjust the translation value as needed
  
    event.preventDefault(); // Prevent default scrolling behavior
  }
  
  
  

  @HostListener('window:resize')
  onResize() {
    this.translateX = -this.currentIndex * 10;
  }
}
