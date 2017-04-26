import { Component } from '@angular/core';
import { NavParams, LoadingController, NavController } from 'ionic-angular';
// <<<<<<< HEAD:src/pages/Vehicle/home.ts
import { ContactPage } from '/Users/isuruavishka/finemgt/src/pages/fine-form/contact.ts';
// import { FineManagement } from '/Users/isuruavishka/finemgt/src/pages/shared/fine-management';
import { HomeScreen } from '/Users/isuruavishka/finemgt/src/pages/home-screen/home-screen.ts';
// =======
// import { ContactPage } from '../contact/contact.ts';
// >>>>>>> a8cbc240d7be66406b942283567d5ae1f3727cf7:src/pages/home/home.ts
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { FineManagement } from "../shared/fine-management";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[ContactPage, FineManagement,HttpModule]
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
  // goHome(){
  //   //this.navCtrl.push(MyTeamsPage);
  //   this.navCtrl.popToRoot();//go to home page using home icon
  // }
  itemTappedHome(){
    this.navCtrl.setRoot(HomeScreen);
  }
}
