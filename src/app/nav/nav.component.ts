import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isOverlayOpen: boolean = false;
  currentOverlay: 'chat' | 'upload' | '' = '';

  openOverlay(overlay: 'chat' | 'upload'): void {
    this.isOverlayOpen = true;
    this.currentOverlay = overlay;
  }
}
