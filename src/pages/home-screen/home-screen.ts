import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '/Users/isuruavishka/finemgt/src/pages/Vehicle/home';
import { TabsPage } from '/Users/isuruavishka/finemgt/src/pages/tabs/tabs';
import { TabsPageK } from '/Users/isuruavishka/finemgt/src/pages/tabs-k/tabs';
import { TabsPageM } from '/Users/isuruavishka/finemgt/src/pages/tabs-m/tabs';
import { AddUser } from '/Users/isuruavishka/finemgt/src/pages/add-user/add-user';
//import { ViewRecordsPage } from '/Users/isuruavishka/finemgt/src/pages/home-screen/home-screen.ts';
import { ReportsPage } from '../reports/reports.ts';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home-screen.html'
})
export class HomeScreen {
 // viewRecords;
  constructor(public navCtrl: NavController) {
    //this.viewRecords = ViewRecordsPage;
  }

  @ViewChild(Slides) slides: Slides;

  itemTapped($event, item){
     this.navCtrl.push(TabsPage,false);
   }
  itemTapped1($event, tourney){
     this.navCtrl.push(TabsPageK,tourney);
   }
  itemTapped2($event, tourney){
     this.navCtrl.push(TabsPageM,tourney);
   }
  itemTapped3($event, tourney){
     this.navCtrl.push(AddUser,tourney);
   }

     goToSlide() {
    this.slides.slideTo(2, 500);
  }


  pics:any[]=[
{
  "url":"assets/img/27150497-Policeman-fine-icon-Stock-Photo.jpg",
},
{
  "url":"assets/img/FreeVector-Vehicle-Icons-Graphics.jpg",
},
{
  "url":"assets/img/POLICE.png",
}


  ]

 slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }
}
