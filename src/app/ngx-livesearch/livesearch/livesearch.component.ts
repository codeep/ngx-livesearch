import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { RequestService } from '../services/request.service';

@Component({
  selector: 'livesearch',
  templateUrl: './livesearch.component.html',
  styleUrls: ['./livesearch.component.css']
})
export class LivesearchComponent implements OnInit {

    @Input() searchUrl ?:string;
    @Input() searchParam: string;
    @Input() localSource: Array<any>;
    @Input() noResultMessage: string;
    @Input() emptyResultMessage: string;
    @Input() seeAllUrl;
    @Output() onSelect = new EventEmitter();

    showEmptyMessage: boolean;

    searchResult = [];
    searchInput: FormControl = new FormControl('');
    constructor(private requestService: RequestService) { }

    ngOnInit() {
        this.init();
    }

    private init() {
        this.configureSearchService();
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
        if(this.searchUrl) {
            this.requestService.searchUrl = this.searchUrl;
            this.requestService.searchParam = this.searchParam;
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
        this.searchResult = results;
        this.showEmptyMessage = results.length || !this.searchInput.value ? false : true;
    }
}
