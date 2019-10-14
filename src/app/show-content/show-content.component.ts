import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { InjectData } from '../popup-window/overlay/overlay.component';
import { Popup } from '../popup-window/popup.service';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css']
})
export class ShowContentComponent implements OnInit, Popup {
  @Output() popupClose = new EventEmitter();
  data;
  constructor(
    private InjectData: InjectData,
  ) {
    this.data = InjectData.data;
  }

  ngOnInit() {
  }
}
