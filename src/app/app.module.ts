import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ShowContentComponent } from './show-content/show-content.component';
import { PopupWindowComponent } from './popup-window/popup-window.component';
import { OverlayComponent } from './popup-window/overlay/overlay.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowContentComponent,
    PopupWindowComponent,
    OverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [ShowContentComponent],
  entryComponents: [
    ShowContentComponent,
    OverlayComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
