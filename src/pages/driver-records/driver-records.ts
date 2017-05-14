import { Component, ViewChild } from '@angular/core';
import { CompleteTestService } from './driver-records.service';
import { NavController } from 'ionic-angular';
import { HomeMenu } from "../home-menu/home-menu";
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';

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
  violations : any;
  nicDetails : any;

  constructor(public navCtrl: NavController, public completeTestService: CompleteTestService) {

  }

  loadSelection($event) {
    this.searchbar.getValue();
    console.log(this.searchbar.getValue());
    this.completeTestService.getResultsForNIC(this.searchbar.getValue()).then(data => {
        
        // calculate tot. no. of broken laws.
        var count_brkn_laws = 0;
        for(var i in data) {
	        count_brkn_laws += data[i].brokenlaw.split(",").length;
        }

        this.results = data;
        var penaltyPointCount = 0;
        var penaltyCount = 0;
        this.results.forEach(item =>{
          penaltyPointCount += parseInt(item.penalitypoints);
          penaltyCount++;
        });
        localStorage.setItem("penaltyCount", penaltyPointCount.toString());
        localStorage.setItem("penaltyOccurance", penaltyCount.toString());
        localStorage.setItem("brokenLaws", count_brkn_laws.toString());
        this.violations = this.results;
        this.nicDetails = [];
        this.nicDetails.push(this.results[0]); 
      });
    
  }
    itemTappedHome(){
    this.navCtrl.setRoot(HomeMenu);
    // console.log(this.navCtrl);
    // this.navCtrl.popToRoot();
  }
}
