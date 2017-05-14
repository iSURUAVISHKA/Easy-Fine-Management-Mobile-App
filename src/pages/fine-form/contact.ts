import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable, AngularFire } from 'angularfire2';
import { HomeMenu } from "../home-menu/home-menu";
import { SMS } from '@ionic-native/sms';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
 
  private form1:FormGroup;
  submitAttempt: boolean = false;

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

  constructor(public navCtrl: NavController,public angFire:AngularFire, 
              private smsVar: SMS,
              public formBuilder: FormBuilder) {

      this.dbfine = angFire.database.list("/items");

      this.userId = localStorage.getItem("userId");
      this.amount = localStorage.getItem("amount");
      this.fineNames = localStorage.getItem("fineNames"); 
      this.points = localStorage.getItem("points");
      console.log(this.amount);

this.form1 = formBuilder.group({
        licenseNo: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9]*'), Validators.required])],
        driverName:['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        address:['',Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9]*[a-zA-Z]*'), Validators.required])],
        fineNames:[''],
        points:[''],
        amount:[''],
        phoneNo:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9]*'), Validators.required])],
        policeStation:['',Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        myDate:['']
   });
 

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
    var phoneNo = this.phoneNo;
    var messageBody = 'You have committed following violations ' + this.fineNames + '. You will be fined an amount of ' + this.amount +'.';

    this.sendSMS(phoneNo,messageBody);
  }
    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }

  sendSMS(phoneNo,messageBody){
    var options={
          replaceLineBreaks: false, // true to replace \n by a new line, false by default
          android: {
               intent: 'INTENT'  // Opens Default sms app
              //intent: '' // Sends sms without opening default sms app
            }
    }
    this.smsVar.send(phoneNo, messageBody,options)
      .then(()=>{
        this.navCtrl.pop(this);
        alert("success");
      },()=>{
      alert("failed");
      });
  }
}
