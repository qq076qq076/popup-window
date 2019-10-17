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

export interface PopupSetting {
  style?;
  title?;
  close?: () => void;
  [propname: string]: any;
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

  open(component: Type<any>, data: PopupSetting) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);
    const overlayRef = factory.create(this.injector);
    data.close = data.close || this.close.bind(this, overlayRef);
    overlayRef.instance.createComponent(component, data);
    this.applicationRef.attachView(overlayRef.hostView);
    const { nativeElement } = overlayRef.location;
    document.body.appendChild(nativeElement);

    return overlayRef;
  }
}
