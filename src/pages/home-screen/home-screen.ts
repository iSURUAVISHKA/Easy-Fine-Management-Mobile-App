import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { TabsPageK } from "../tabs-k/tabs";
// import { HomePage } from '/Users/isuruavishka/finemgt/src/pages/Vehicle/home';
// import { TabsPage } from '/Users/isuruavishka/finemgt/src/pages/tabs/tabs';
// import { TabsPageK } from '/Users/isuruavishka/finemgt/src/pages/tabs-k/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home-screen.html'
})
export class HomeScreen {

  constructor(public navCtrl: NavController) {

  }
  itemTapped($event, item){
     this.navCtrl.push(TabsPage,item);
   }
  itemTapped1($event, tourney){
     this.navCtrl.push(TabsPageK,tourney);
   }
  // itemTapped2($event, tourney){
  //    this.navCtrl.push(ContactPage,tourney);
  //  }
  // itemTapped3($event, tourney){
  //    this.navCtrl.push(ContactPage,tourney);
  //  }
}
