import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RequestService {

    searchUrl: string;
    searchParam: string;
    timeToWait;
    searchValue: string;
    requestStart = new Subject();
    requestStartObs: Observable<any>;
    limit: Number;
    constructor(private http: HttpClient) { 
        this.requestStartObs = this.requestStart.asObservable();
    }

    public search(inputObservable: Observable<string>) {
        return inputObservable.debounceTime(this.timeToWait)
        .distinctUntilChanged()
        .switchMap(query => {
            this.requestStart.next(query);
            this.searchValue = query;
            return this.searchRequest(query)
        });
    }

    public lazyLoad (offset) {
        let body = this.getRequestBody(offset);
        return this.http.post(this.searchUrl, body);
    }

    public searchRequest(query) {
        if(!query) return Observable.of([]);
        let body = this.getRequestBody();
        return this.http.post(this.searchUrl, body);
    }

    public getRequestBody (offset = 1) {
        let limit = this.limit;
        let body = {
            offset,
            limit
        };
        let searchParam = this.searchParam;
        body[searchParam] = this.searchValue;
        return body;
    }

}