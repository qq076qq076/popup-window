import { Component, OnInit, Input, ComponentRef, ViewChildren, ViewChild, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {
  @Input() label: string;
  @ViewChild('tabItem', { static: true }) templateRef: TemplateRef<any>;
  @Output() click = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
}
