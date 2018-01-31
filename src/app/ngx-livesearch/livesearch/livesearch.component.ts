import { Component, OnInit, Input, HostListener, Output, EventEmitter} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { RequestService } from '../services/request.service';
import { NgForOf } from '@angular/common/src/directives';

@Component({
  selector: 'livesearch',
  templateUrl: './livesearch.component.html',
  styleUrls: ['./livesearch.component.css']
})
export class LivesearchComponent implements OnInit {

    @Input() searchUrl :string;
    @Input() localSource: Array<any>;

    @Input() textOptions;
    @Input() searchOptions;

    @Output() onSelect = new EventEmitter();
    showEmptyMessage: boolean;
    seeAllParams;
    searchResult = [];
    searchInput: FormControl = new FormControl('');
    defaultSearchOptions = {
        searchParam: 'name',
        interval: 400,
        limit: 10,
        seeAllUrl: null,
        seeAllParams: {},
        seeAllPassSearchValue: true
    }
    
    defaultTextOptions = {
        seeAll: 'See all',
        noResults: 'No results',
        placeholder: 'Search'
    };

    constructor(private requestService: RequestService) { }

    ngOnInit() {
        this.searchOptions = Object.assign(this.defaultSearchOptions, this.searchOptions);
        this.textOptions = Object.assign(this.defaultTextOptions, this.textOptions);
        this.init();
    }

    private init() {
        this.configureSearchService();
    }

    public getSeatchParams () {
        if(this.searchOptions.seeAllPassSearchValue) {
            let key = this.searchOptions.searchParam;
            this.searchOptions.seeAllParams[key] = this.searchInput.value;
        }
        return this.searchOptions.seeAllParams;
    }

    public keyPressedOnSearchInput (event: KeyboardEvent) {
        if(event.keyCode != 40 || !this.searchResult.length) return
        let firstSearchItem = document.querySelector('.firstSearchResult') as HTMLBaseElement;
        firstSearchItem.focus();
        event.preventDefault();
    }

    public keyPressedOnSearchResult (event: KeyboardEvent) {
        let keycode = event.keyCode;
        if([38, 40].indexOf(keycode) == -1) return
        let target = event.currentTarget as HTMLBaseElement;
        let next = (keycode == 38 ? target.previousElementSibling : target.nextElementSibling) as HTMLBaseElement;
        if(next && next.tagName == 'LI') {
            next.focus();
            event.preventDefault();
        }
    }

    public configureSearchService () {
        this.requestService.timeToWait = this.searchOptions.interval;
        this.requestService.limit = this.searchOptions.limit;
        if(this.searchUrl) {
            this.requestService.searchUrl = this.searchUrl;
            this.requestService.searchParam = this.searchOptions.searchParam;
            this.requestService.search(this.searchInput.valueChanges)
                .subscribe(this.searchFinished.bind(this))
        } else {
            this.searchInput.valueChanges.subscribe(this.localSourceHandler.bind(this));
        }
    }  

    public searchResultSelected(selectedItem) {
        this.onSelect.emit(selectedItem);
    }

    public localSourceHandler (query: string) {
        if(!query) return this.searchFinished([])
        let retVal = this.localSource.filter(data => data.indexOf(query) != -1);
        this.searchFinished(retVal);
    }

    public searchFinished (results: Array<any>) {
        this.searchResult = results.slice(0, this.searchOptions.limit);
        this.showEmptyMessage = results.length || !this.searchInput.value ? false : true;
    }

    public clearSearch () {
        this.searchInput.setValue('');
    }

}
