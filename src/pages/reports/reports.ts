import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Http } from "@angular/http";

/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
  item:any;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;
  private baseUrl = 'https://finemanagement-d3002.firebaseio.com/';

  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
        this.item = navParams.get('item');
        this.retrieveItems();

  }

  retrieveItems(){
      this.getRoadfines()
      .then(data => {
          this.items = data
          console.log(JSON.stringify(this.items));
    });
  }

  getRoadfines(){
        return new Promise(resolve =>{
            this.http.get(`${this.baseUrl}/items.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
    console.log('item'+ JSON.stringify(this.item));

    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3,7],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(64, 64, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(160, 160, 160, 1)'
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

}
