import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { popupFadeDown, fadeInDown } from './popup-animation';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  animations: [popupFadeDown, fadeInDown]
})
export class PopupWindowComponent implements OnInit {
  @Output() popupClose = new EventEmitter();
  @Input() disableClose: boolean;
  @HostBinding('@fadeInDown') fadeInDown: any;
  constructor() { }

  ngOnInit() {
  }

}
