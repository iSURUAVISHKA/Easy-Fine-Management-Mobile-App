import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ReportsPage } from "../reports/reports";

/*
  Generated class for the ViewRecords page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
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
    console.log(item);
    this.navCtrl.push(ReportsPage,{item:item});
  }

}
