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
  popupClose: EventEmitter<any>;
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

  open(component: Type<any>, closeEvent, data?) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);
    const componentRef = factory.create(this.injector);
    const bindData = {
      ...data,
      close: () => { this.close(componentRef); }
    };
    componentRef.instance.data = bindData;
    componentRef.instance.component = component;
    componentRef.instance.popupClose.subscribe(closeEvent);

    this.applicationRef.attachView(componentRef.hostView);
    const { nativeElement } = componentRef.location;
    document.body.appendChild(nativeElement);
    return componentRef;
  }
}
