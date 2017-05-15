import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading, ModalController } from 'ionic-angular';
import { HomeMenu } from '../home-menu/home-menu';
import { Register } from '../register/register';
import { AuthService } from '../../providers/auth-service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //providers: [HomePage,Register,AuthService]
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
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    public angFire: AngularFire,
    private modalctrl: ModalController) {
  }

  public createAccount() {
    this.navCtrl.push(Register);
  }

  // public login() {
  //   this.showLoading()
  //   this.auth.login(this.registerCredentials).subscribe(allowed => {
  //     if (allowed) {
        
  //       setTimeout(() => {
  //         localStorage.setItem("userId",this.registerCredentials.email);
  //         this.loading.dismiss();
  //         this.navCtrl.setRoot(HomeMenu)
  //       });
  //     } else {
  //       this.showError("Access Denied");
  //     }
  //   },
  //     error => {
  //       this.showError(error);
  //     });
  // }

  // showLoading() {
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Please wait...'
  //   });
  //   this.loading.present();
  // }

  // showError(text) {
  //   setTimeout(() => {
  //     this.loading.dismiss();
  //   });

  //   let alert = this.alertCtrl.create({
  //     title: 'Fail',
  //     subTitle: text,
  //     buttons: ['OK']
  //   });
  //   alert.present(prompt);
  // }

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
      items.forEach(item => {
        if(item.username == this.usernameField && item.password == this.passwordField){
            validUser = true;
            loading.dismiss();
            console.log("Valid Found ADMIN")
             localStorage.setItem('userType','ADMIN');
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
                            localStorage.setItem('userType','CUST');
              this.navCtrl.push(HomeMenu);
        }      
      });
      if(!validUser){
        loading.dismiss();
        alert("Wrong Passwords");
      }
      }
    });


}

}

