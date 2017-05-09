import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ReportsPage } from '../reports/reports.ts';
import { ReportsPage2 } from '../reports/reports2.ts';
import { ReportsPage3 } from '../reports/reports3.ts';
import { HomeMenu } from "../home-menu/home-menu";
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
@Component({
  selector: 'page-view-records',
  templateUrl: 'view-records.html'
})
export class ViewRecordsPage {
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items = [{
          id:0,
          value:"View Daily Fines"
        },{
          id:1,
          value:"View Monthly Fines"
        },{
          id:2,
          value:"Most Caught Fine"
        } ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewRecordsPage');
  }

  itemSelected(item){
    var id = item.id;
    console.log(id);
    
    if(id == 0) {
      this.navCtrl.push(ReportsPage,{item:item});
    } else if (id == 1) {
      this.navCtrl.push(ReportsPage2,{item:item});
    }else if (id == 2) {
      this.navCtrl.push(ReportsPage3,{item:item});
    }
  }
  itemTappedHome() {
    this.navCtrl.setRoot(HomeMenu);
    //this.navCtrl.pop();
  }
}
