import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  Type,
  ComponentRef,
  EmbeddedViewRef
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) { }

  open(component: Type<any>, data?): ComponentRef<any> {
    const pickerRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    const pickerInstance = pickerRef.instance;
    pickerInstance.popupClose.subscribe(this.close.bind(this, pickerRef));
    pickerInstance.animation = true;
    pickerInstance.data = data;
    this.applicationRef.attachView(pickerRef.hostView);

    const domElem = (pickerRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    return pickerRef;
  }

  close(componentRef: ComponentRef<any>) {
    componentRef.instance.animation = false;
    this.applicationRef.detachView(componentRef.hostView);
  }
}
