import { Component, ComponentRef, ContentChild, ViewChild } from '@angular/core';
import { PopupService } from './popup-window/popup.service';
import { ShowContentComponent } from './show-content/show-content.component';
import { StepTabComponent } from './step-tab/step-tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'popup-window';
  comRef: ComponentRef<any>;
  titleList: string[] = ['表單設定', '題目編輯'];
  tab: string = this.titleList[0];
  showTab = false;
  @ViewChild('stepTab', { static: true }) stepTab: StepTabComponent;

  constructor(
    private popupService: PopupService
  ) { }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log(this.stepTab)
  }

  showPopup() {
    this.comRef = this.popupService.open(
      ShowContentComponent,
      {
        message: 'here is message',
        close: this.close.bind(this)
      });
  }

  close() {
    this.popupService.close(this.comRef);
  }

  changeTab(tab: string) {
    console.log(tab)
  }

  console() {
    console.log('click')
  }

  lastStep() {
    this.stepTab.lastStep();
  }
  nextStep() {
    this.stepTab.nextStep();
  }
}
