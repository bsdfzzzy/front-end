import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { homeData } from "../model/homeModel";

@Injectable()
export class HomeService {
    constructor(private http: Http){

    }
    public gethomedata(): Observable<homeData[]> {
        let params = new URLSearchParams();
        return this.http
               .get('assets/data/search.json')
               .map((res:Response) => {
                   let result=res.json();
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));

  }
}