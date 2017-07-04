import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { studyAbroadData } from "../model/studyAbroadModel";

@Injectable()
export class studyAbroadService {
    constructor(private http: Http){

    }
    public getstudyAbroaddata(typeid:number): Observable<studyAbroadData[]> {
        let params = new URLSearchParams();
        params.set('typeid',String(typeid));
        return this.http
               .get('assets/data/search.json',{search:params})
               .map((res:Response) => {
                   let result=res.json();
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));
  }
  
}