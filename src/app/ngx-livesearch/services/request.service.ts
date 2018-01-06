import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RequestService {

  searchUrl: string;
  queryUrl: string;
  constructor(private http: HttpClient) { }

  public search(inputObservable: Observable<string>) {
    return inputObservable.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(query => this.searchRequest(query));
  }

  public searchRequest(query) {
    if(!query) return Observable.of([])
    return this.http
        .get(this.searchUrl + '?' + this.queryUrl + "=" +  query)
  }
}
