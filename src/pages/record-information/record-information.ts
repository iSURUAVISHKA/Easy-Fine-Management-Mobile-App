import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomeMenu } from "../home-menu/home-menu";
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
@Component({
  selector: 'page-about',
  templateUrl: 'record-information.html'
})
export class RecordInfo {

  penaltySum : string;
  penaltyCount : string;
  penaltyStatus : string;
  brokenLaws: String;
  constructor(public navCtrl: NavController) {
     this.penaltySum = localStorage.getItem("penaltyCount");
     this.brokenLaws = localStorage.getItem("brokenLaws");
        this.penaltyCount = localStorage.getItem("penaltyOccurance");
        if(parseInt(this.penaltySum) < 50){
            this.penaltyStatus = "No Penelty Status";
        }
        else if(parseInt(this.penaltySum) >= 50 && parseInt(this.penaltySum) < 100){
            this.penaltyStatus = "License suspend for one month";
        }
        else if(parseInt(this.penaltySum) >= 100 && parseInt(this.penaltySum) < 149){
            this.penaltyStatus = "License suspend for six months";
        }
        else if(parseInt(this.penaltySum) >= 150 && parseInt(this.penaltySum) < 500){
            this.penaltyStatus = "License suspend for one year";
        }
  }
    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }
}
