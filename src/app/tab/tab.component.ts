import { Component, Output, EventEmitter, ContentChildren, AfterContentInit } from '@angular/core';
import { TabItemComponent } from './tab-item/tab-item.component';

export interface ChangeParam {
  LastTab: string;
  NextTab: string;
}

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements AfterContentInit {
  // 切換tab時觸發 回傳要切換過去的tab的label
  @Output() changeTab = new EventEmitter<ChangeParam>();
  @ContentChildren(TabItemComponent) tabItemList: TabItemComponent[];
  labelList: string[] = [];
  showTab: TabItemComponent;
  constructor() { }

  toggleTab(tab: string) {
    if (tab !== this.showTab.label) {
      const lastTab = this.showTab.label;
      this.showTab = this.getTab(tab);
      this.showTab.click.emit();
      this.changeTab.emit({ LastTab: lastTab, NextTab: tab });
    }
  }

  ngAfterContentInit(): void {
    this.setTabData();
  }

  private getTab(tabLabel: string) {
    return this.tabItemList.find((tabItem: TabItemComponent) => tabItem.label === tabLabel);
  }

  private setTabData() {
    this.tabItemList.forEach((element, index: number) => {
      this.labelList.push(element.label);
      if (index === 0) {
        this.showTab = element;
      }
    });
  }

}
