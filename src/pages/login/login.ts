import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, ModalController } from 'ionic-angular';
import { HomeMenu } from '../home-menu/home-menu';
import { Register } from '../register/register';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  public usernameField: any;
  public passwordField: any;
  public userData : any;
  public adminUsers : any;
  public customerUsers : any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public angFire: AngularFire,
    private modalctrl: ModalController) {
  }

  public createAccount() {
    this.navCtrl.push(Register);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }


  loadhomepage(){
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();
  var validUser = false;

  this.userData = this.angFire.database.list('/Admin');

    this.userData.subscribe(items => {
      this.adminUsers = items;
      console.log(this.adminUsers);
      items.forEach(item => {
        if(item.username == this.usernameField && item.password == this.passwordField){
            validUser = true;
            loading.dismiss();
             localStorage.setItem('userId',this.usernameField);
              this.navCtrl.push(HomeMenu);
        }      
      });
    });

    
    this.userData = this.angFire.database.list('/Users');

    this.userData.subscribe(items => {
      this.customerUsers = items;
      if(!validUser){
        items.forEach(item => {
        if(item.author == this.usernameField && item.title == this.passwordField){
            validUser = true;
            console.log("Valid Found Customer")
            loading.dismiss();
              localStorage.setItem('userId',this.usernameField);
              this.navCtrl.push(HomeMenu);
        }      
      });
      if(!validUser){
        loading.dismiss();
        alert("Wrong Password");
      }
      }
    });


}

}

