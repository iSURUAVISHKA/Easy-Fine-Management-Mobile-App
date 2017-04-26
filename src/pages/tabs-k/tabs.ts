import { Component } from '@angular/core';

import { DriverRecord } from '../driver-records/driver-records';
import { RecordInfo } from '../record-information/record-information';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPageK {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab4Root: any = DriverRecord;
  tab5Root: any = RecordInfo;

  constructor() {

  }
}
