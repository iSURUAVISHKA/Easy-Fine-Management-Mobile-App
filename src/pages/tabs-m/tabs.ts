import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// <<<<<<< HEAD
import { HomePage } from '../Vehicle/home';
import { AboutPage } from '../road-fines/about';
import { ContactPage } from '../fine-form/contact';
// =======
// import { HomePage } from '../home/home';
// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
import { ViewRecordsPage } from "../view-records/view-records";
// >>>>>>> a8cbc240d7be66406b942283567d5ae1f3727cf7

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPageM {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  status;
  tabBarElement;
  // tab1Root: any = HomePage;
  // tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;
  tab1Root: any = ViewRecordsPage;
  constructor() {
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillLeave(){
      this.tabBarElement.style.display = 'none';
  }
}
