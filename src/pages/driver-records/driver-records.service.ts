import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import {Injectable} from "@angular/core";
//import { SearchData } from '/Users/isuruavishka/search/src/pages/shared/data.ts';
import 'rxjs/add/operator/map'
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()

@Component({
  providers:[HttpModule]
})
export class CompleteTestService implements AutoCompleteService {
  items:any;
  labelAttribute = "licenseNo";
  private baseUrl = 'https://finemanagement-d3002.firebaseio.com/';

  constructor(private http:Http) {
    // this.ionViewDidLoad();
  }
  getResults(keyword: string) {

    return this.http.get(`${this.baseUrl}/items.json`)
      .map(
      result => {
        return Object.keys(result.json())
        .map(key => result.json()[key]).filter(item => item.licenseNo.toLowerCase().startsWith(keyword.toLowerCase()));
      }
      );
  }

  getResultsForNIC(keyword: string) {
    var ob = new Promise(resolve => {
      this.http.get(`${this.baseUrl}/items.json`)
        .subscribe(res => resolve(
          Object.keys(res.json()).map(key => res.json()[key]).filter(item => {
            return item.licenseNo == keyword;
          })));

    });
    return ob;
  }

}