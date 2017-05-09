import { Component } from '@angular/core';

import { NavParams, LoadingController, NavController } from 'ionic-angular';
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
import { FineManagement } from "../shared/fine-management";
import { HomeMenu } from "../home-menu/home-menu";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    vehiclefines:any;

      constructor(public navCtrl: NavController,               
              public navParams: NavParams, 
              public finemgt:FineManagement,
              public loadingController: LoadingController) {
      // this.navParam.data(ContactPage,{
      //   param1:"{{getSum(fines)}}"
      // });
      console.log(this.vehiclefines);
  }

       ionViewDidLoad(){
        let loader = this.loadingController.create({
          content: 'Getting Fines...'
          //spinner: 'dots'
        });
        loader.present().then(() => {
          this.finemgt.getRoadfines().then(data => this.vehiclefines = data).then(d => {
            this.vehiclefines.map(function (item) {
              item['status'] = false;
              return item;
            })
            loader.dismiss();
          });
        })

      }
     
    getSum=function getSum(source){
      
      var sum = 0.0;
      if(source != undefined)
      {
        source.forEach(function(item){
        if(item.status){
          sum +=
          parseFloat(item.amount);
        }
        });
      }
      return sum;
    }
    
     goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }
}
