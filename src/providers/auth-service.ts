import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string,) {
    this.name = name;
    this.email = email;
    console.log(this.name+this.email);
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  private baseUrl = 'https://login-eeae5.firebaseio.com';

    constructor(private http:Http) {
    // this.ionViewDidLoad();
  }
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Simon', 'saimon@devdactic.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  getResultsForNIC(name: string, email:string) {
    var ob = new Promise(resolve => {
      this.http.get(`${this.baseUrl}/logindata.json`)
        .subscribe(res => resolve(res.json().filter(item => {
          return item.username == name && item.password == email;
        })));
    });
    return ob;
  }
  
}

