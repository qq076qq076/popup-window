import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  Type,
  ComponentRef,
  EventEmitter
} from '@angular/core';
import { OverlayComponent } from './overlay/overlay.component';

export interface Popup {
  close: () => void;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  close(componentRef: ComponentRef<any>) {
    componentRef.destroy();
  }

  open(component: Type<any>, closeEvent: () => void, data?) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);
    const overlayRef = factory.create(this.injector);
    const bindData = {
      ...data,
      close: closeEvent,
    };
    overlayRef.instance.createComponent(component, closeEvent, bindData);
    this.applicationRef.attachView(overlayRef.hostView);
    const { nativeElement } = overlayRef.location;
    document.body.appendChild(nativeElement);

    return overlayRef;
  }
}
