import { Component, HostBinding } from '@angular/core';
import { fadeInDown } from './popup-animation';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [fadeInDown]
})
export class OverlayComponent {
  @HostBinding('@fadeInDown') fadeInDown;
  constructor() { }
}
