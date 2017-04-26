import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  fines = [
    {id:1, name:'Speeding', amount:1000, status:false},
    {id:2, name:'Overtaking', amount:1500, status:false},
    {id:3, name:'Drunk', amount:2000, status:false},
    {id:4, name:'Modify', amount:1000, status:false},
    {id:5, name:'Noise', amount:500, status:false},
  ];
       getSum=function getSum(source){
      var sum = 0.0;
      source.forEach(function(item){
        if(item.status){
          sum +=
          parseFloat(item.amount);
        }
      });
      return sum;
    }
    
  constructor(public navCtrl: NavController) {
  }
 
}
