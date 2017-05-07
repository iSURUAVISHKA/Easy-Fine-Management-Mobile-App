import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TabsPage } from '/Users/isuruavishka/finemgt/src/pages/tabs/tabs';
import { TabsPageK } from '/Users/isuruavishka/finemgt/src/pages/tabs-k/tabs';
import { TabsPageM } from '/Users/isuruavishka/finemgt/src/pages/tabs-m/tabs';
import { AddUser } from '/Users/isuruavishka/finemgt/src/pages/add-user/add-user';

@Component({
  selector: 'page-contact',
  templateUrl: 'home-menu.html'
})
export class HomeMenu {

  constructor(public navCtrl: NavController) {

  }
  // mySlideOptions = {pager:true};
  // slides = [{"MediaUrl" : "images/1d.jpg"},{"MediaUrl" : "images/penalty.jpg"}]

 @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }


  pics:any[]=[
{
  "url":"/assets/img/27150497-Policeman-fine-icon-Stock-Photo.jpg",
},
{
  "url":"/assets/img/FreeVector-Vehicle-Icons-Graphics.jpg",
},
{
  "url":"/assets/img/POLICE.png",
}


  ]

 slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log("Current index is", currentIndex);
  }

  itemTapped($event){
    
     this.navCtrl.push(TabsPage);
   }
     itemTapped1($event){
     this.navCtrl.push(AddUser);
   }
     itemTapped2($event){
     this.navCtrl.push(TabsPageM);
   }
     itemTapped3($event){
       
     this.navCtrl.push(TabsPageK);
   }
}
