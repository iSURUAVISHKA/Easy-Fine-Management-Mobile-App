import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { TabsPage } from "../tabs/tabs";
import { AddUser } from "../add-user/add-user";
import { TabsPageM } from "../tabs-m/tabs";
import { TabsPageK } from "../tabs-k/tabs";

@Component({
  selector: 'page-contact',
  templateUrl: 'home-menu.html'
})
export class HomeMenu {

  constructor(public navCtrl: NavController) {

  }

 @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }


  pics:any[]=[
{
  "url":"assets/img/Untitled-4.jpg",
},
{
  "url":"assets/img/Untitled-5.jpg",
},
{
  "url":"assets/img/Untitled-2.jpg",
},
{
  "url":"assets/img/Untitled-3.jpg",
},
{
  "url":"assets/img/Untitled-6.jpg",
},
{
  "url":"assets/img/Untitled-7.jpg",
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
