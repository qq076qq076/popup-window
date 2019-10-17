import { Component, OnInit, Input, Injector } from '@angular/core';
import { Popup } from '../popup-window/popup.service';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css']
})
export class ShowContentComponent implements Popup {
  @Input() data;
  constructor() { }

  close() {
    this.data.close();
  }
}
