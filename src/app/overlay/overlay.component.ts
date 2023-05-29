import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {

  @Output() closeOverlay = new EventEmitter(); 
  @Input() currentOverlay!: string;
}
