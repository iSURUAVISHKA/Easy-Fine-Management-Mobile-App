import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { HomeMenu } from '../home-menu/home-menu';
import { Register } from '../register/register';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  //providers: [HomePage,Register,AuthService]
})
export class Login {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }

  public createAccount() {
    this.navCtrl.push(Register);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        
        setTimeout(() => {
          localStorage.setItem("userId",this.registerCredentials.email);
          this.loading.dismiss();
          this.navCtrl.setRoot(HomeMenu)
        });
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}

