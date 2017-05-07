import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public userId : any;
  public amount : any;
  public fineNames : any;
  public points :any;

  constructor(public navCtrl: NavController) {
      this.userId = localStorage.getItem("userId");
      this.amount = localStorage.getItem("amount");
      this.fineNames = localStorage.getItem("fineNames"); 
      this.points = localStorage.getItem("points");
      console.log(this.amount);
  }
    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }
}
