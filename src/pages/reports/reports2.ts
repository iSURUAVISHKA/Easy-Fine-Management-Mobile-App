import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { HomeMenu } from "../home-menu/home-menu";
import { SQLite } from "ionic-native/dist/es5";
// import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage2 {
    item:any;
    database = new SQLite();
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    lastMonths = [];
  fines = [];
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
  }
  monthBefore(){
      for(var days = 210; days>0; days-=30){
        var date = new Date();
        var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
        var day =last.getDate();
        var month=last.getMonth()+1;
        var year=last.getFullYear();
        console.log(year+'-'+month+'-'+(day<10?'0'+day:day));
        this.retrieveItems(year+'-'+(month<10?'0'+month:month));
        var date = new Date((month<10?'0'+month:month)+'/'+(day<10?'0'+day:day)+'/'+year),
        locale = "en-us";
        this.lastMonths.push(''+date.toLocaleString(locale, { month: "long" }));
        console.log(this.lastMonths);
      }
      console.log('done');
  }

  retrieveItems(date){
      var sum = 0;
    this.database.openDatabase({
                name: "data.db",
                location: "default"
    }).then(() => {
    this.database.executeSql("SELECT * FROM fines WHERE fineDate LIKE'"+date+"%'", []).then((data) => {
        if(data.rows.length > 0) {
            for(var i = 0; i < data.rows.length; i++) {
                console.log(data.rows.item(i).amount);
                sum += data.rows.item(i).amount;
            }
            this.fines.push(sum);
            console.log("fines: " + this.fines);
        }else{
            this.fines.push(0);
        }

        if(this.fines.length == 7){
            console.log('done');

      this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: this.lastMonths,
                datasets: [{
                    label: '# of Votes',
                    data: this.fines,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 129, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(55, 159, 64, 19)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
        }
    }, (error) => {
        console.log("ERROR: " + JSON.stringify(error));
    });
}, (error) => {
                console.error("Unable to open database", error);
            });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
    console.log('item'+ JSON.stringify(this.item));
    this.monthBefore();
}

    goHome(){
    this.navCtrl.setRoot(HomeMenu);
  }

}
