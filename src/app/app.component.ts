import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';
import { TabsPage } from '../pages/tabs/tabs';
import { FineManagement } from '/Users/isuruavishka/finemgt/src/pages/shared/fine-management.ts';


@Component({
  templateUrl: 'app.html',
  providers:[FineManagement, HttpModule]
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
