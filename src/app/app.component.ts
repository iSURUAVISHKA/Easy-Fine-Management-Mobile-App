import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen, SQLite } from 'ionic-native';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeScreen } from '../pages/home-screen/home-screen';
// import { FineManagement } from '/Users/isuruavishka/finemgt/src/pages/shared/fine-management.ts';
import { FineManagement } from "../pages/shared/fine-management";
import { Login} from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers:[FineManagement, HttpModule,HomeScreen]
})
export class MyApp {
  rootPage = Login;
  db = new SQLite();
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      StatusBar.styleDefault();
            let db = new SQLite();
            db.openDatabase({
                name: "data.db",
                location: "default"
            }).then(() => {
                db.executeSql("CREATE TABLE IF NOT EXISTS fines (id INTEGER PRIMARY KEY AUTOINCREMENT, fineDate DATE, amount REAL);", {})
                .then((data) => {
                    console.log("TABLE CREATED: ", data);
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-12\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-11\', 2000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-12\', 4500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-15\', 15000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-09\', 7000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-07\', 6788.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-12\', 6700.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-06\', 4500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-05\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-09\', 900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-07\', 7900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-05-12\', 750.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-04-05\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-04-09\', 900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-04-07\', 7900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-04-12\', 750.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-03-05\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-03-09\', 900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-03-07\', 7900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-03-12\', 750.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-02-12\', 6700.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-02-06\', 4500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-02-05\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-02-09\', 900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-02-07\', 7900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-01-12\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-01-11\', 2000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-01-12\', 4500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-01-15\', 15000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2017-01-09\', 7000.00);', {});

                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-12-05\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-12-09\', 900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-12-07\', 7900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-12-12\', 750.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-11-12\', 6700.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-11-06\', 4500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-11-05\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-11-09\', 900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-11-07\', 7900.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-11-12\', 1500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-10-11\', 2000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-10-12\', 4500.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-10-15\', 15000.00);', {});
                    db.executeSql('INSERT INTO fines (fineDate, amount) VALUES (\'2016-09-09\', 7000.00);', {});
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
    });
  }
}
