import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
})
export class PopupWindowComponent implements OnInit {
  @Output() popupClose = new EventEmitter();
  // 可以點擊外部關閉
  @Input() disableClose: boolean;
  // 是否隱藏關閉按鈕
  // @Input() hiddenCloseButton: 'false' | 'true' = 'false';
  @Input() width: string;
  @Input() heigth: string;
  @Input() maxWidth: string;
  @Input() maxHeight: string;
  @Input() minWidth: string;
  @Input() minHeight: string;
  @ViewChild('content', { static: true }) content;
  @HostListener('click', ['$event']) close(event) {
    // 點擊非內容區域的話 執行close
    if (!this.disableClose && this.content.nativeElement !== event.target) {
      this.popupClose.emit();
    }
  }

  get contentStyle() {
    return {
      width: this.width,
      heigth: this.heigth,
      'max-width': this.maxWidth,
      'max-height': this.maxHeight,
      'min-width': this.minWidth,
      'min-height': this.minHeight,
    };
  }
  constructor() { }

  ngOnInit() {
  }
}
