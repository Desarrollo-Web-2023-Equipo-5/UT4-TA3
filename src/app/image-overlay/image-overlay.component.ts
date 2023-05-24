import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-overlay',
  templateUrl: './image-overlay.component.html',
  styleUrls: ['./image-overlay.component.css']
})
export class ImageOverlayComponent {
  @Input() imageUrl!: string;
  @Output() imageClicked: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.imageClicked.emit();
  }
}
