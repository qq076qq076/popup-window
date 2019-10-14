import { Component, HostBinding, Input, Type, Injector, Injectable, Output, EventEmitter } from '@angular/core';
import { fadeInDown } from './popup-animation';

@Injectable()
export class InjectData {
  data;
  constructor(data) {
    this.data = data;
  }
}

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [fadeInDown]
})
export class OverlayComponent {
  @HostBinding('@fadeInDown') fadeInDown;
  @Output() popupClose = new EventEmitter();
  @Input() component: Type<any>;
  @Input() set data(data) {
    this.myInjector = Injector.create({
      providers:
        [{ provide: InjectData, useValue: { data } }],
      parent: this.injector
    });
  }
  myInjector;
  constructor(
    private injector: Injector
  ) { }
}
