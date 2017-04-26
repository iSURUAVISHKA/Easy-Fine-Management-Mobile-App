import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { HomeScreen } from '../pages/home-screen/home-screen';
// import { FineManagement } from '/Users/isuruavishka/finemgt/src/pages/shared/fine-management.ts';
import { FineManagement } from "../pages/shared/fine-management";


@Component({
  templateUrl: 'app.html',
  providers:[FineManagement, HttpModule,HomeScreen]
})
export class MyApp {
  rootPage = HomeScreen;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
