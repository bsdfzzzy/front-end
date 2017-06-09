import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { SearchResults } from "./searchResults";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SearchService {
    constructor(private http: Http){

    }

    public getSearchResults(selectwords): Observable<SearchResults[]> {
        let params = new URLSearchParams();
        params.set('selectwords',String(selectwords));
        return this.http
               .get('assets/a.json',{search:params})
               .map((res:Response) => {
                   let result=res.json();
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));

  }
}
