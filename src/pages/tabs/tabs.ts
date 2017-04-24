import { Component } from '@angular/core';

import { HomePage } from '../Vehicle/home';
import { AboutPage } from '../road-fines/about';
import { ContactPage } from '../fine-form/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
