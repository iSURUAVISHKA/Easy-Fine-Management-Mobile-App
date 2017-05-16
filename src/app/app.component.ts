import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite } from 'ionic-angular/sqlite';
import { StatusBar, Splashscreen } from 'ionic-native';
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
                db.executeSql("CREATE TABLE IF NOT EXISTS fines (id INTEGER PRIMARY KEY AUTOINCREMENT, fineDate DATE, amount FLOAT)", {}).then((data) => {
                    console.log("TABLE CREATED: ", data);
                    db.transaction(function (tx) {
                      tx.executeSql('INSERT INTO fines (id, fineDate, amount) VALUES (0, "2017-05-20", 300.00)');
                      tx.executeSql('INSERT INTO fines (id, fineDate, amount) VALUES (1, "2017-05-20"),5000.00');
                    });
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
            });
    });
  }
}
