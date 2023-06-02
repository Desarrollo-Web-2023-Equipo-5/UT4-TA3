import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {
  @Input() name!: string;
  @Input() selected: boolean;

  constructor() {
    this.selected = false;
  }
}