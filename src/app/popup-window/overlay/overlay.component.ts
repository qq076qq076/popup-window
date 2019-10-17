import {
  Component,
  HostBinding,
  ElementRef,
  ComponentFactoryResolver,
  Injector,
  Type,
  Output,
  EventEmitter,
  ViewChild,
  EmbeddedViewRef,
  ApplicationRef,
  ComponentRef
} from '@angular/core';
import { fadeInDown } from './popup-animation';
import { Popup } from '../popup.service';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
  animations: [fadeInDown]
})
export class OverlayComponent {
  @HostBinding('@fadeInDown') fadeInDown;
  @ViewChild('content', { static: true }) content: ElementRef<any>;
  @Output() popupClose = new EventEmitter();
  injectComponentRef: ComponentRef<Popup>;
  constructor(
    public elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) { }

  createComponent(component: Type<Popup>, closeEvent: () => void, data?) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(component);
    this.injectComponentRef = factory.create(this.injector);
    this.injectComponentRef.instance.data = data;
    this.applicationRef.attachView(this.injectComponentRef.hostView);
    const { rootNodes } = this.injectComponentRef.hostView as EmbeddedViewRef<any>;
    this.content.nativeElement.appendChild(rootNodes[0]);
  }

  close() {
    this.injectComponentRef.instance.close();
  }
}
