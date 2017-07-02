import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { aboutData } from "../model/aboutModel";

@Injectable()
export class AboutService {
    constructor(private http: Http){

    }
    public getaboutdata(): Observable<aboutData[]> {
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