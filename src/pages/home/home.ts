import { Component } from '@angular/core';
import { NavParams, LoadingController, NavController } from 'ionic-angular';
import { ContactPage } from '/Users/isuruavishka/finemgt/src/pages/contact/contact.ts';
import { FineManagement } from '/Users/isuruavishka/finemgt/src/pages/shared/fine-management';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ContactPage, FineManagement, HttpModule]
})
export class HomePage {
  roadfines:any;

  constructor(public navCtrl: NavController,               
              public navParams: NavParams, 
              public finemgt:FineManagement,
              public loadingController: LoadingController) {
      // this.navParam.data(ContactPage,{
      //   param1:"{{getSum(fines)}}"
      // });
  }
     ionViewDidLoad(){
      let loader = this.loadingController.create({
          content:'Getting Fines...'
          //spinner: 'dots'
      });
      loader.present().then(()=>{
          this.finemgt.getRoadfines().then(data => this.roadfines = data).then(d =>{
            this.roadfines.map(function (item) { 
            item['status'] = false ; 
            return  item;
          })
            loader.dismiss();
          }) ;
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

  itemTapped($event, tourney){
     this.navCtrl.push(ContactPage,tourney);
   }
}
