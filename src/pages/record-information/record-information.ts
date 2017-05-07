import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
@Component({
  selector: 'page-about',
  templateUrl: 'record-information.html'
})
export class RecordInfo {

  constructor(public navCtrl: NavController) {

  }
    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }
}
