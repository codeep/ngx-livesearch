import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RequestService {

    searchUrl: string;
    searchParam: string;
    timeToWait;
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
            this.requestStart.next();
            return this.searchRequest(query)
        });
    }

    public searchRequest(query) {
        if(!query) return Observable.of([]);
        let searchParam = this.searchParam;
        const body = { };
        body[searchParam] = query;
        body['limit'] = this.limit;
        return this.http.post(this.searchUrl, body);
    }
}