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

  containerElement: HTMLElement;

  open<T>(component: Type<Popup>): ComponentRef<Popup> {
    const content = this.componentFactoryResolver.resolveComponentFactory(OverlayComponent);
    const { contentComponentRef, ngContent } = this.createContent(component);
    const overlayRef = content.create(this.injector, ngContent);
    // overlayRef.instance.popupClose.subscribe(this.close.bind(this, overlayRef))
    if (contentComponentRef.instance) {
      contentComponentRef.instance.popupClose.subscribe(this.close.bind(this, overlayRef));
    }
    this.applicationRef.attachView(overlayRef.hostView);

    const { nativeElement } = overlayRef.location;
    document.body.appendChild(nativeElement);
    return contentComponentRef;
  }

  close(componentRef: ComponentRef<any>) {
    componentRef.destroy();
    // this.applicationRef.detachView(componentRef.hostView);
  }

  createContent<T>(content: Type<T>): { contentComponentRef: ComponentRef<T>, ngContent: any[][] } {
    const factory = this.componentFactoryResolver.resolveComponentFactory(content);
    const contentComponentRef = factory.create(this.injector);
    return {
      contentComponentRef,
      ngContent: [[contentComponentRef.location.nativeElement], [document.createTextNode('Second ng-content')]]
    };
  }
}
