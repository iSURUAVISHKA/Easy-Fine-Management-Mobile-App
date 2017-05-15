import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/road-fines/about';
import { ContactPage } from '../pages/fine-form/contact';
import { HomePage } from '../pages/Vehicle/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabsPageK } from '../pages/tabs-k/tabs';
import { HomeScreen } from '../pages/home-screen/home-screen';
import { HomeMenu } from '../pages/home-menu/home-menu';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { BrowserModule } from '@angular/platform-browser';
import { ViewRecordsPage } from "../pages/view-records/view-records";
import { ReportsPage } from "../pages/reports/reports";
import { ReportsPage2 } from "../pages/reports/reports2";
import { ReportsPage3 } from "../pages/reports/reports3";
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { HttpModule } from '@angular/http'
import { TabsPageM } from '../pages/tabs-m/tabs';
import { AddUser } from '../pages/add-user/add-user';
import { AngularFireModule } from 'angularfire2';
import { DriverRecord } from "../pages/driver-records/driver-records";
import { RecordInfo } from "../pages/record-information/record-information";
import { SMS } from "@ionic-native/sms";

export const firebaseConfig = {
    apiKey: "AIzaSyBLtOuh487QT0H4CF2VE-Ya6_BBBDC5bPM",
    authDomain: "finemanagement-d3002.firebaseapp.com",
    databaseURL: "https://finemanagement-d3002.firebaseio.com",
    projectId: "finemanagement-d3002",
    storageBucket: "finemanagement-d3002.appspot.com",
    messagingSenderId: "573853578150"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeMenu,
    DriverRecord,
    TabsPageK ,
    RecordInfo,
    ViewRecordsPage,
    TabsPageM,
    ReportsPage,
    ReportsPage2,
    ReportsPage3,
    TabsPage,
    Login,
    Register,
    AddUser
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HomeMenu,
    DriverRecord,
    TabsPageK,
    RecordInfo,
    TabsPageM,
    ViewRecordsPage,
    ReportsPage,
    ReportsPage2,
    ReportsPage3,
    Login,
    Register,
    AddUser,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},HttpModule,SMS]
})
export class AppModule {}
