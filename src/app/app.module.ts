import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShowContentComponent } from './show-content/show-content.component';
import { OverlayComponent } from './popup-window/overlay/overlay.component';
import { StepTabComponent } from './step-tab/step-tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tabs/tab-item/tab-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowContentComponent,
    OverlayComponent,
    StepTabComponent,
    TabsComponent,
    TabItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    ShowContentComponent,
    OverlayComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
