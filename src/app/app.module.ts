import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/road-fines/about';
import { ContactPage } from '../pages/fine-form/contact';
import { HomePage } from '../pages/Vehicle/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageK } from '../pages/tabs-k/tabs';
import { HomeScreen } from '../pages/home-screen/home-screen';
import { DriverRecord } from '/Users/isuruavishka/finemgt/src/pages/driver-records/driver-records.ts';
import { RecordInfo } from '/Users/isuruavishka/finemgt/src/pages/record-information/record-information.ts';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { BrowserModule } from '@angular/platform-browser';
import { ViewRecordsPage } from "../pages/view-records/view-records";
import { ReportsPage } from "../pages/reports/reports";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeScreen,
    DriverRecord,
    TabsPageK ,
    RecordInfo,
    ViewRecordsPage,
    ReportsPage,
    TabsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeScreen,
    DriverRecord,
    TabsPageK,
    RecordInfo,
    ViewRecordsPage,
    ReportsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
