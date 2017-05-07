import { Component, ViewChild } from '@angular/core';
import { CompleteTestService } from './driver-records.service';
import { NavController } from 'ionic-angular';
import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';

@Component({
  selector: 'page-home',
  templateUrl: 'driver-records.html',
  providers: [CompleteTestService]
})
export class DriverRecord {
  
  @ViewChild('searchbar') searchbar;
  private results: any;
  searchNic: string = '';
  items: any[];
  result: any[];
  constructor(public navCtrl: NavController, public completeTestService: CompleteTestService) {

  }

  loadSelection($event) {
    this.searchbar.getValue();
    console.log(this.searchbar.getValue());
    this.completeTestService.getResultsForNIC(this.searchbar.getValue()).then(data => {
        this.results = data;
        console.log(this.results)
      });
    
  }
    itemTappedHome(){
    this.navCtrl.setRoot(HomeMenu);
    // console.log(this.navCtrl);
    // this.navCtrl.popToRoot();
  }
}
