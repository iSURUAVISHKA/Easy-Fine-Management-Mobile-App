import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

@Injectable()
export class FineManagement{
    
    private baseUrl = 'https://finemanagement-d3002.firebaseio.com/';
    constructor(private http: Http) { }

    getRoadfines(){
        return new Promise(resolve =>{
            this.http.get(`${this.baseUrl}/roadfines.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

    getVehiclefines(){
        return new Promise(resolve =>{
            this.http.get(`${this.baseUrl}/vehiclefines.json`)
                .subscribe(res => resolve(res.json()));
        });
    }
}