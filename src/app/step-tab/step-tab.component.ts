import { Component, ContentChildren, Output, EventEmitter, AfterContentInit, QueryList, Input } from '@angular/core';
import { TabItemComponent } from '../tab/tab-item/tab-item.component';
import { ChangeParam } from '../tab/tab.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-step-tab',
  templateUrl: './step-tab.component.html',
  styleUrls: ['./step-tab.component.css']
})
export class StepTabComponent implements AfterContentInit {
  // 切換tab時觸發 回傳要切換過去的tab的label
  @Output() changeTab = new EventEmitter<ChangeParam>();
  @ContentChildren(TabItemComponent) tabItemList: QueryList<TabItemComponent>;
  @Input() tabPadding = 133;
  // labelList: string[] = [];
  showTab: TabItemComponent;
  // step 從0開始
  readyStep = 0;
  constructor(private domSanitizer: DomSanitizer) { }

  lastStep() {
    const step = this.getTabIndexByLabel(this.showTab);
    if (step - 1 >= 0) {
      const lastTab = this.tabItemList.toArray()[step - 1];
      this.setCurrentTab(lastTab);
    }
  }

  nextStep() {
    const step = this.getTabIndexByLabel(this.showTab);
    if (step + 1 <= this.tabItemList.length - 1) {
      const nextTab = this.tabItemList.toArray()[step + 1];
      this.setCurrentTab(nextTab);
    }
  }

  ngAfterContentInit(): void {
    this.showTab = this.tabItemList.toArray()[0];
  }

  setCurrentTab(tab: TabItemComponent) {
    if (tab !== this.showTab) {
      const lastTab = this.showTab.label;
      this.showTab = tab;
      const step = this.getTabIndexByLabel(tab);
      this.readyStep = (this.readyStep < step) ? step : this.readyStep;
      this.showTab.click.emit();
      this.changeTab.emit({ LastTab: lastTab, NextTab: tab.label });
    }
  }

  getwidth() {
    const allStep = this.tabItemList.length;
    const nowStep = this.getTabIndexByLabel(this.showTab);
    const width = `calc((100% - ${this.tabPadding * 2}px) / ${allStep} / 2 * ${1 + nowStep * 2} + ${this.tabPadding}px)`;
    return this.domSanitizer.bypassSecurityTrustStyle(width);
  }

  private getTabIndexByLabel(tab: TabItemComponent) {
    return this.tabItemList.toArray().findIndex((item: TabItemComponent) => tab === item);
  }
}
