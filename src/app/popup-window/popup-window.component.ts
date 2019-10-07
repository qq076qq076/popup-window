import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { popupFadeDown } from './popup-animation';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  animations: [popupFadeDown]
})
export class PopupWindowComponent implements OnInit {
  @Output() popupClose = new EventEmitter();
  @Input() disableClose: boolean;
  @Input() animation = false;
  constructor() { }

  ngOnInit() {
  }

}
