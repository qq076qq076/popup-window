import { Component, ComponentRef } from '@angular/core';
import { PopupService } from './popup-window/popup.service';
import { ShowContentComponent } from './show-content/show-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'popup-window';
  comRef: ComponentRef<any>;

  constructor(
    private popupService: PopupService
  ) { }

  showPopup() {
    this.comRef = this.popupService.open(
      ShowContentComponent,
      this.close.bind(this),
      { message: 'here is message' });
  }

  close() {
    this.popupService.close(this.comRef);
  }
}
