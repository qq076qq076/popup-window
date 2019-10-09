import { Component, OnInit, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-show-content',
  templateUrl: './show-content.component.html',
  styleUrls: ['./show-content.component.css']
})
export class ShowContentComponent implements OnInit {
  @Input() message: string;
  @Output() popupClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
