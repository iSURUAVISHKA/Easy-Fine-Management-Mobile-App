import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { HomeMenu } from "../home-menu/home-menu";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  dbfine:FirebaseListObservable<any>;
  public userId : any;
  public amount : any;
  public licenseNo : any;
  public address : any;
  public driverName: any;
  public fineNames : any;
  public points :any;
  public phoneNo: any;
  public policeStation: any;
  public myDate: any;

  constructor(public navCtrl: NavController,public angFire:AngularFire) {

      this.dbfine = angFire.database.list("/items");

      this.userId = localStorage.getItem("userId");
      this.amount = localStorage.getItem("amount");
      this.fineNames = localStorage.getItem("fineNames"); 
      this.points = localStorage.getItem("points");
      console.log(this.amount);

      
  }

  addFine() {
      console.log("Date"+this.myDate);
    this.dbfine.push({
      userId: this.userId,
      amount: this.amount,
      address: this.address,
      name: this.driverName,
      date: this.myDate,
      licenseNo: this.licenseNo,
      brokenlaw: this.fineNames,
      penalitypoints: this.points,
      contact: this.phoneNo,
      policeStation: this.policeStation
    });
    this.navCtrl.pop(this);
  }
    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }
}
