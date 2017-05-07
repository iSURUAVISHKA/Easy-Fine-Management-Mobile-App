import { Component } from '@angular/core';
import { NavParams, LoadingController, NavController } from 'ionic-angular';
// <<<<<<< HEAD:src/pages/Vehicle/home.ts
import { ContactPage } from '/Users/isuruavishka/finemgt/src/pages/fine-form/contact.ts';
// import { FineManagement } from '/Users/isuruavishka/finemgt/src/pages/shared/fine-management';
import { HomeMenu } from '/Users/isuruavishka/finemgt/src/pages/home-menu/home-menu.ts';
// =======
// import { ContactPage } from '../contact/contact.ts';
// >>>>>>> a8cbc240d7be66406b942283567d5ae1f3727cf7:src/pages/home/home.ts
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { FineManagement } from "../shared/fine-management";
import { TabsPage } from '/Users/isuruavishka/finemgt/src/pages/tabs/tabs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ContactPage, FineManagement, HttpModule]
})
export class HomePage {
  roadfines: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public finemgt: FineManagement,
    public loadingController: LoadingController) {
    // this.navParam.data(ContactPage,{
    //   param1:"{{getSum(fines)}}"
    // });
  }

  onPageWillLeave() {
    console.log('asasasasasas');
  }
  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting Fines...'
      //spinner: 'dots'
    });
    loader.present().then(() => {
      this.finemgt.getRoadfines().then(data => this.roadfines = data).then(d => {
        this.roadfines.map(function (item) {
          item['status'] = false;
          return item;
        })
        loader.dismiss();
      });
    })

  }

  getSum = function getSum(source) {

    var sum = 0.0;
    if (source != undefined) {
      source.forEach(function (item) {
        if (item.status) {
          sum +=
            parseFloat(item.amount);
        }
      });
    }
    if (this.roadfines != undefined) {
      var items = this.roadfines.filter(item => {
        return item.status == true;
      }).map(item => {
        return item.name;
      });

      localStorage.setItem("fineNames", items);

    }

    localStorage.setItem("amount", sum.toString());

    return sum;
  }

  getSum1 = function getSum1(source1) {

    var sum = 0.0;
    if (source1 != undefined) {
      source1.forEach(function (item) {
        if (item.status) {
          sum +=
            parseFloat(item.points);
        }
      });
    }
    if (this.roadfines != undefined) {
      var items1 = this.roadfines.filter(item => {
        return item.status == true;
      }).map(item => {
        return item.points;
      });

      //localStorage.setItem("fineNames",items);

    }

    localStorage.setItem("points", sum.toString());
    return sum;
  }

  itemTapped($event, tourney) {
    this.navCtrl.push(ContactPage, tourney);
  }
  itemTappedHome() {
    if (this.roadfines != undefined) {
      var items = this.roadfines.filter(item => {
        return item.status == true;
      }).map(item => {
        return item.name;
      });

      localStorage.setItem("fineNames", items);

    }
    localStorage.setItem("amount", this.getSum(this.roadfines).toString());
    this.navCtrl.setRoot(HomeMenu);
  }
}
